import LeaseStatus from '../../enums/LeaseStatus';
import { Unit } from '../../interfaces/unit.interface';
import { IFilter } from '../../interfaces/filter.interface';

export default class LeaseStatusFilter implements IFilter {
  leaseStatus: LeaseStatus;

  constructor(leaseStatus: LeaseStatus) {
    this.leaseStatus = leaseStatus;
  }

  filter(unit: Unit): boolean {
    if (this.leaseStatus === LeaseStatus.ANY) {
      return true;
    }
    return unit.leaseStatus === this.leaseStatus;
  }
}
