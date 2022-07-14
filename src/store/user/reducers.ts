import { LoginState, LoginActionTypes, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./action-types";

const initialState: LoginState = {
  loginInfo: {
    account: '',
    anchorAuth: '',
    balance: '',
    wax: null,
    walletSession: null,
    assets: null,
    isLogin: false,
  }
};

export function userReducer(state = initialState, action: LoginActionTypes): LoginState {
  switch (action.type) {
    case LOGIN_REQUEST: {
      const loginInfo = {...state.loginInfo};
      loginInfo.isLogin = false;
      return {loginInfo};
    }
    case LOGIN_SUCCESS: {
      const { account, anchorAuth, balance, walletSession, assets } = action.payload;

      const loginInfo = {...state.loginInfo};
      loginInfo.account = account;
      loginInfo.balance = balance;
      loginInfo.walletSession = walletSession;
      loginInfo.assets = assets;
      loginInfo.anchorAuth = anchorAuth;
      loginInfo.isLogin = true;


      return { loginInfo };

    }
    case LOGIN_ERROR: {
      const { error } = action.payload;
      const loginInfo = {...state.loginInfo};
      loginInfo.isLogin = false;
      return { loginInfo };
    }
    
    default:
      return { ...state };
  }
}
