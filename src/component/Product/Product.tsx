import { Button, Flex, Table } from 'antd';
import { Header } from 'antd/es/layout/layout';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL } from '../../constants/constants';

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/products`);
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
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      render: (text: string, record: any) => (
        <a href={`/product/${record.id}`}>{text}</a>
      ),
    },
    {
      title: 'Giá',
      dataIndex: 'price',
    },
    {
      title: 'Tổng số lượng hàng',
      dataIndex: 'stock_quantity',
    },
    {
      title: 'đã bán',
      dataIndex: 'sold_quantity',
    },
    {
      title: 'Loại sản phẩm',
      dataIndex: 'category_id',
    },
  ];

  return (
    <div>
      <Header
        style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}
      >
        <Button
          onClick={() => {
            navigate('/product/create');
          }}
          type="dashed"
        >
          Tạo sản phẩm
        </Button>
      </Header>
      <Table
        columns={columns}
        dataSource={products}
        bordered
        scroll={{ y: 350 }}
        pagination={false}
      />
    </div>
  );
};

export default Product;
