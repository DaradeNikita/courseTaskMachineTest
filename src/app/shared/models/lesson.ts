export interface IlessonsRes{
    payload: Ilesson[]
}


export interface Ilesson {
    id: number;
    description: string;
    duration: string;
    seqNo: number;
    courseId: number;
}