import { Injectable } from '@angular/core';
import { ApiService } from "@core/services/api.service";
import {Routes} from "../../routes";

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor (
    private routes: Routes,
    private apiService: ApiService
  ) {
  }

  getAllSubscriptionsById(id: string) {
    return this.apiService.get(this.routes.getAllSubscriptionsUrl(id))
  }

  addSubscription(data: object) {
    return this.apiService.post(this.routes.addSubscriptionsUrl, data)
  }

  deleteSubscription(id: string) {
    return this.apiService.delete(this.routes.deleteSubscriptionsUrl(id))
  }

}
