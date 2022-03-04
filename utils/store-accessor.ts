import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Addresses from '@/store/addresses'

let addresses: Addresses

function initializeStore(store: Store<any>): void { addresses = getModule(Addresses, store) }

export { initializeStore, addresses }