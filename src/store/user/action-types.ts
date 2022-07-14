export interface LoginInfo {
  account: string;
  anchorAuth: string;
  balance: string;
  wax: any;
  walletSession: any;
  assets: any;
  isLogin: boolean;
}

export interface LoginState {
  loginInfo: LoginInfo;
}

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

interface LoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: {
    
  };
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: {
    account: string;
    anchorAuth: string;
    balance: string;
    assets: any;
    walletSession?: any;
  };
}

interface LoginError {
  type: typeof LOGIN_ERROR;
  payload: {
    error: any;
  };
}


export type LoginActionTypes = LoginRequest | LoginSuccess | LoginError ;
