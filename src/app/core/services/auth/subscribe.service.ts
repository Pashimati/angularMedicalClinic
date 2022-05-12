import { Injectable } from '@angular/core';
import { ApiService } from "@core/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private apiService: ApiService) {
  }

  getAllSubscriptionsById(id: string) {
    return this.apiService.get(`subscription/get-all-byId/${id}`)
  }

  deleteSubscription(id: string) {
    return this.apiService.delete(`subscription/delete/${id}`)
  }

}
