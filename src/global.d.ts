interface Data {
    keyword: string;
    value: number;
    source: string;
}

interface Datas { 
    data ?: Array<Data>,
    status ?: string
}