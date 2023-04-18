import { Theme } from "../interfaces/Theme";

export class AppService {
  private _theme: Theme = "DarkTheme";

  public get theme(): Theme {
    return this._theme;
  }

  public set theme(value: Theme) {
    this._theme = value;
  }
}