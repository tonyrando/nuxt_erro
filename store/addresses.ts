import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Address } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

interface Show { id: Address['id'] }

@Module({ name: 'addresses', namespaced: true })
export default class Addresses extends VuexModule{
  private addresses = [] as Address[]
  private address = {} as Address

  public get $all() { return this.addresses }

  public get $single() { return this.address }

  @Mutation
  private SET_SINGLE(address: Address) { this.address = address }

  @Mutation
  private SET_ALL(addresses: Address[]) { this.addresses = addresses }

  @Action
  public async index() { 
    const addresses = await $axios.$get<Address[]>('/addresses')
    console.log(addresses)
    this.context.commit('SET_SINGLE', addresses)
  }

  @Action
  public async show({ id }: Show) { 
    const address = await $axios.$get<Address>(`/addresses/${id}`)
    this.context.commit('SET_SINGLE', address)
  }
}