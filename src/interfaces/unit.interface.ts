import AmenityType from '../enums/AmenityType';

export interface Unit {
  id: number
  name: string
  propertyId: number
  floorplanId: number
  leaseStatus: string
  unitNumber: string
  internalAvailableDate?: string
  vacantDate?: string
  displayed: boolean
  numberOfBeds: number
  numberOfBaths: number
  floorNumber: number
  squareFeet: number
  rent?: number
  minLeaseTermInMonth?: number
  maxLeaseTermInMonth?: number
  depositInMonths?: number
  displayOrder: number
  active: boolean
  rentModifiedType: string
  rentModifiedId: number
  rentModifiedTimestamp: string
  buildingId: number
  buildingName: string
  unitPartnerId: string
  floorplanPartnerId?: string
  newAudit: NewAudit
  floorPlanImages: FloorPlanImage[]
  amenityList?: AmenityList[]
  hasRentMatrix: boolean
  unitLeasedStatus?: string
  unitOccupancyStatus?: string
  partnerName: string
  partnerPropertyId: string
  entityName: string
  entityId: number
  unitOnHold?: boolean
  militarySubdivisionName?: string
}

export interface NewAudit {
  createdId: number
  modifiedId: number
  createdTimeStamp: string
  modifiedTimeStamp: string
  createdUserType: string
  modifiedUserType: string
}

export interface FloorPlanImage {
  src: string
  httpsSrc: string
  subtext: string
  maxWidth: string
  maxHeight: string
  tag: string
  displaySequence: number
  mediaId: number
  alt: string
}

export interface AmenityList {
  displaySequence: number
  amenityPartnerId: string
  name: string
  id: string
  display: boolean
  leased: boolean
  description: string
  amenityType: AmenityType
  actualName: string
  partnerPropertyIds: string[]
}
