export interface LeadsPostDate {
  name: string
  email: string
  phone: string
}

export interface LeadsData extends LeadsPostDate {
  id: number
}
