import { Table,  TableProps} from "antd";

type DataType  = {
    key: string;
    name: string;
    quantity: number;
    price: number;
    address: string;
}


const columns: TableProps<DataType>['columns'] = [
    {
        title: 'ID',
        dataIndex: 'key',
        rowScope: 'row',
        width:'5vw'
    },
    {
        title: 'Product Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
    },
    {
        title: 'Price',
        dataIndex: 'price',
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'Dress',
        quantity: 32,
        price: 60.000,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jean',
        price: 20000,
        quantity: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Camera',
        quantity: 32,
        price: 18900010002,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Shirt',
        quantity: 18,
        price: 18900010002,
        address: 'London No. 2 Lake Park',
    },
    {
        key: '5',
        name: 'Polo',
        quantity: 18,
        price: 18900010002,
        address: 'Dublin No. 2 Lake Park',
    },
];

function Product() {

    return (
        <div>
            <Table columns={columns} dataSource={data} bordered />
        </div>
    );
}

export default Product;