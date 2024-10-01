export class Login {
  constructor(
    public email: string,
    public password: string,
  ) {}
}


export class Registration {
  constructor(
    public name: string,
    public login: Login,
  ) {}
}