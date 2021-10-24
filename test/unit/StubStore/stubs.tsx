import {ProductShortInfo} from "../../../src/common/types";
import {ExampleApi} from "../../../src/client/api";
import {AxiosResponse} from "axios";

export class StoreFakeApi extends ExampleApi {
    async getProducts() {
        return [
            {id: 0, name: "Plumbus", price: 500}, {id: 1, name: "Portal Gun", price: 5000}
        ] as unknown as AxiosResponse<ProductShortInfo[]>
    }
}