import { Button, Flex, Table } from 'antd';
import { Header } from 'antd/es/layout/layout';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      rowScope: 'row',
      width: '5vw',
    },
    {
      title: 'Product Name',
      dataIndex: 'name',
      render: (text: string, record: any) => (
        <a href={`/product/${record.id}`}>{text}</a>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Stock quantity',
      dataIndex: 'stock_quantity',
    },
    {
      title: 'Sold quantity',
      dataIndex: 'sold_quantity',
    },
    {
      title: 'Category',
      dataIndex: 'category_id',
    },
  ];

  return (
    <div>
      <Header>
        <Button
          onClick={() => {
            navigate('/product/create');
          }}
        >
          Tạo sản phẩm
        </Button>
      </Header>
      <Table columns={columns} dataSource={products} bordered />
    </div>
  );
};

export default Product;
