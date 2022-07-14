import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./action-types";
import * as waxjs from "@waxio/waxjs/dist";

import AnchorLink, { LinkSession } from 'anchor-link'
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'
import { Api } from "eosjs";

const endpoint_uri = 'https://wax.greymass.com';

const collection = "reaper";
const dapp = "reaper";

const wax = new waxjs.WaxJS({
  rpcEndpoint: endpoint_uri
});

export function WalletLogin(walletType: string) {

  return async (dispatch: any) => {
    let account = '';
    let wallet_session;
    let anchorAuth = 'active';

    try {
      const transport = new AnchorLinkBrowserTransport();
      const anchorLink = new AnchorLink({
        transport,
        chains: [{
          chainId: 'f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12',
          nodeUrl: endpoint_uri,
        }],
      }); 

      if (walletType == "Anchor") {
        var sessionList = await anchorLink.listSessions(dapp);
        if (sessionList && sessionList.length > 0) {
          wallet_session = await anchorLink.restoreSession(dapp);
        } else {
          wallet_session = (await anchorLink.login(dapp)).session;
        }
        if(wallet_session) {
          account = String(wallet_session.auth).split("@")[0];
          let auth = String(wallet_session.auth).split("@")[1];
          anchorAuth = auth;
        }
        
      } else {
        account = await wax.login();
        wallet_session = wax.api;
        anchorAuth = "active";
      }

      let assets = [];
      var path = "atomicassets/v1/assets?collection_name=" + collection + "&owner=" + account + "&page=1&limit=1000&order=desc&sort=asset_id";
      const response = await fetch("https://" + "wax.api.atomicassets.io/" + path, {
        headers: {
          "Content-Type": "text/plain"
        },
        method: "POST",
      });
      const body = await response.json();
      if (body.data.length != 0)
        assets = body.data;
      console.log(assets, 'assets');
      let balance = 0;
      dispatch({
          type: LOGIN_SUCCESS,
          payload: { account, anchorAuth, balance, assets, wallet_session}
      });

      
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: { error }
      });
    } 
  }
}


export function LoginRequest(id: number) {
  return {
    type: LOGIN_REQUEST,
    payload: {  }
  };
}


