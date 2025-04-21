import { Page,expect } from "@playwright/test";

export default class WomensPage{

page: Page;

constructor (page: Page){
 this.page= page;
}

}