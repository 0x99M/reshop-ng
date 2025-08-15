import { Component } from '@angular/core';
import { Order } from '../../types/order';
import { IonContent, IonList, IonItem, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'orders-view',
  imports: [IonContent, IonList, IonItem, IonButton],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {
  orders: Order[] = data;
}

const data = [
    {
        "id": "0807cfd2-1522-498c-8bdf-b65129ca5c6d",
        "totalPrice": "2044.65",
        "createdAt": "2025-07-25T06:29:24.620Z",
        "updatedAt": "2025-08-15T11:32:17.832Z"
    },
    {
        "id": "8c79309d-259f-413f-a90f-4f2754d3801b",
        "totalPrice": "5649.11",
        "createdAt": "2025-07-24T13:16:33.206Z",
        "updatedAt": "2025-08-15T11:32:17.836Z"
    },
    {
        "id": "257d7808-fb92-4df2-9319-f3ba2f3b6bbe",
        "totalPrice": "3422.37",
        "createdAt": "2025-07-26T11:36:55.987Z",
        "updatedAt": "2025-08-15T11:32:17.839Z"
    },
    {
        "id": "7913efa4-15a2-4e5a-9c86-c35ef64b3b25",
        "totalPrice": "3223.33",
        "createdAt": "2025-08-08T08:51:16.544Z",
        "updatedAt": "2025-08-15T11:32:17.842Z"
    },
    {
        "id": "91699a15-07e9-463f-9a5f-755a3f0668b3",
        "totalPrice": "2498.85",
        "createdAt": "2025-08-07T21:01:18.393Z",
        "updatedAt": "2025-08-15T11:32:17.845Z"
    },
    {
        "id": "aa748ee8-1055-49da-9ead-d70153343e7e",
        "totalPrice": "1894.17",
        "createdAt": "2025-08-12T01:37:05.015Z",
        "updatedAt": "2025-08-15T11:32:17.847Z"
    },
    {
        "id": "2957fab3-637f-4938-aef2-f03c48f5e4d5",
        "totalPrice": "7862.41",
        "createdAt": "2025-07-27T13:36:27.794Z",
        "updatedAt": "2025-08-15T11:32:17.849Z"
    },
    {
        "id": "3f04e750-78f2-4174-8856-fa32a048f10e",
        "totalPrice": "2052.80",
        "createdAt": "2025-07-23T18:00:01.567Z",
        "updatedAt": "2025-08-15T11:32:17.852Z"
    },
    {
        "id": "95857f27-a7ff-4948-b21d-4e5da594f097",
        "totalPrice": "5016.98",
        "createdAt": "2025-07-18T12:04:52.252Z",
        "updatedAt": "2025-08-15T11:32:17.854Z"
    },
    {
        "id": "0f807321-3131-4a24-af76-4359d82f5f7b",
        "totalPrice": "5897.65",
        "createdAt": "2025-07-19T13:59:26.052Z",
        "updatedAt": "2025-08-15T11:32:17.857Z"
    }
]
