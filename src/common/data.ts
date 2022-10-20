export interface Actor {
  env: string;
  actorData: ActorData;
}

export interface Login {
  userName: string;
  password: string;
}

export interface Register {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}

export interface ActorData {
  login: Login;
  register: Register;
}
