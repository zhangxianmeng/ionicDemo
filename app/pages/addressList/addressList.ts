import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Details} from '../addressList/details';//这里特别注意页面路径AddressList

@Component({
    templateUrl: 'build/pages/addressList/addressList.html'
})
export class AddressList {
    private contacts:any;

    constructor(private navController:NavController) {
        this.contacts = [
            {
                "contactid": 1,
                "contactname": "张三",
                "contacttext": "13800000001",
                "info": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut deserunt ducimus eos esse id incidunt maxime quia repellendus velit. Minima, reiciendis, rerum. Dicta dolore ducimus in nulla perspiciatis quos."
            },
            {
                "contactid": 2, "contactname": "李四", "contacttext": "13800000002",
                "info": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut deserunt ducimus eos esse id incidunt maxime quia repellendus velit. Minima, reiciendis, rerum. Dicta dolore ducimus in nulla perspiciatis quos."
            },
            {
                "contactid": 3, "contactname": "王五", "contacttext": "13800000003",
                "info": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut deserunt ducimus eos esse id incidunt maxime quia repellendus velit. Minima, reiciendis, rerum. Dicta dolore ducimus in nulla perspiciatis quos."
            },
            {
                "contactid": 4, "contactname": "李六", "contacttext": "13800000004",
                "info": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut deserunt ducimus eos esse id incidunt maxime quia repellendus velit. Minima, reiciendis, rerum. Dicta dolore ducimus in nulla perspiciatis quos."
            },
            {
                "contactid": 5, "contactname": "张美女", "contacttext": "13800000005",
                "info": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut deserunt ducimus eos esse id incidunt maxime quia repellendus velit. Minima, reiciendis, rerum. Dicta dolore ducimus in nulla perspiciatis quos."
            }
        ];
    }

    itemClick(contact) {
        //console.log(this.navController)
        // 在点击的时候，加载对应的详细列表页面。
        this.navController.push(Details, {mengge: contact})
    }

}
