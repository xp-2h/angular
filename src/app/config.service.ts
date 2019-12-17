import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public api: string = 'http://192.168.0.65:4200';
  public title: string = '标准标题';

  constructor() { }
}
