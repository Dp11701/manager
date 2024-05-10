import { Button, Table } from 'antd';
import { Header } from 'antd/es/layout/layout';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL } from '../../constants/constants';
import HeaderComponent from '../common/HeaderComponent/HeaderComponent';

const User = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/users`);
        setUsers(response.data);
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
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
    },
  ];

  return (
    <div>
      <HeaderComponent
        content="Tạo người dùng"
        navigateContent="/users/create"
      />
      <Table
        columns={columns}
        dataSource={users}
        bordered
        scroll={{ y: 350 }}
        pagination={false}
      />
    </div>
  );
};

export default User;
