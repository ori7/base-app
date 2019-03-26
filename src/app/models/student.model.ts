import { DocModel } from './firebase-doc.model';

export interface StudentModel extends DocModel{
    name: string;
    phone: number;
    city: string;
}