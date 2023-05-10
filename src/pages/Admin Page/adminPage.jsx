
import { useNavigate } from 'react-router-dom';
import { UploadOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  Form,
  Input,
  Popconfirm,
  Space,
  Table,
  Typography,
  Upload,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  ADD_USER,
  DELETE_USER,
  GET_USERS,
  UPDATE_USER,
} from "./query/users-query";
import LoadingComponent from '../../components/loadingComponent/loadingComponent';
import { uploaderConfig } from '../../config/uploader-config';
import { useSingleUploader } from '../../hooks/useSingleUploader';
import { INITIAL_TABLE_DATA } from './const';

const AdminPage = () => {
  
const getBase64 = (file) =>
new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

const { Title } = Typography;
const { TextArea } = Input;
const [formBio] = Form.useForm();
const [avatar, setAvatar] = useState("");

// Get Data
const {
  data: usersData,
  loading: isUsersLoading,
  error: usersError,
} = useQuery(GET_USERS);

// Add Data
const [addUser, { loading: loadingAddUser }] = useMutation(ADD_USER, {
  refetchQueries: [GET_USERS],
});

// Update Data
const [updateUser, { loading: loadingUpdateUser }] = useMutation(
  UPDATE_USER,
  {
    refetchQueries: [GET_USERS],
  }
);

// Delete Data
const [deleteUser, { loading: loadingDelete }] = useMutation(DELETE_USER, {
  refetchQueries: [GET_USERS],
});

// Upload Image
const [isLoadingUpload, uploadFile] = useSingleUploader();

const [rowData, setRowData] = useState();
const [isEdit, setIsEdit] = useState(false);

const TABLE_COLUMNS = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (_, record, index) => (
      <img
        src={record.avatar}
        alt={`avatar-${index}`}
        style={{ height: "30px" }}
      />
    ),
  },
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Product Category",
    dataIndex: "productCategory",
    key: "productCategory",
  },
  {
    title: "Product Freshness",
    dataIndex: "productFresh",
    key: "productFresh",
  },
  {
    title: "Product Price",
    dataIndex: "productPrice",
    key: "productPrice",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (_, record) =>
      INITIAL_TABLE_DATA.length >= 1 ? (
        <Space>
          <a onClick={() => handleEdit(record)}>Edit</a>
          <Popconfirm
            title="Sure to delete?"
            arrow={false}
            onConfirm={() => onDelete(record.uuid)}
          >
            <a>Delete</a>
          </Popconfirm>
        </Space>
      ) : null,
  },
];

//   to handle edit button
const handleEdit = (row_data) => {
  setRowData(row_data);
  setIsEdit(true);
  setAvatar(row_data.avatar);
  formBio.setFieldsValue({
    productName: row_data.productName,
    productCategory: row_data.productCategory,
    productFresh: row_data.productFresh,
    productPrice: row_data.productPrice,
  });
};

//   to handle cancel button
const handleCancel = () => {
  setRowData();
  setAvatar("");
  setIsEdit(false);
  formBio.resetFields();
};

//   Add Data to table
const onAdd = (values) => {
  const body = {
    avatar: avatar,
    ...values,
  };
  addUser({
    variables: {
      object: {
        ...body,
      },
    },
    onError: (err) => {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    },
    onCompleted: () => handleCancel(),
  });
};

//   Delete Data from table
const onDelete = (row_id) => {
  deleteUser({
    variables: { uuid: row_id },
    onError: (err) => {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    },
  });
};

//   Edit Data from table
const onEdit = (values) => {
  const uuid = rowData.uuid;
  const body = {
    avatar: avatar,
    ...values,
  };

  updateUser({
    variables: { pk_columns: { uuid: uuid }, _set: { ...body } },
    onCompleted: () => {
      handleCancel();
    },
    onError: (err) => {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    },
  });
};

// to handle Upload Image
const handleUpload = async (file) => {
  const body = {
    file: await getBase64(file.file.originFileObj),
    upload_preset: uploaderConfig.upload_preset,
    public_id: file.file.name.replace(/\.[^.]*$/, ""),
    api_key: uploaderConfig.api_key,
  };
  uploadFile(body, (data) => {
    setAvatar(data.url);
  });
};

useEffect(() => {
  if (usersError) {
    message.open({
      type: "error",
      content: `${usersError?.message}`,
    });
  }
}, [usersError]);
    

 
    return (
       <>
     
      <Title>Form Add Barang</Title>

      {/* Form */}
      <Form
        name="form-bio"
        form={formBio}
        layout="horizontal"
        onFinish={isEdit ? onEdit : onAdd}
        colon={false}
        style={{
          width: "800px",
        }}
        labelAlign="left"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
      >
        <Form.Item
          name="productName"
          label="Product Name"
          rules={[
            {
              required: true,
              message: "Please input your Product Name!",
            },
          ]}
        >
          <Input placeholder="Input your Product Name" />
        </Form.Item>

        <Form.Item
          name="productCategory"
          label="Product Category"
          rules={[
            {
              required: true,
              message: "Please input your Product Category!",
            },
          ]}
        >
          <Input placeholder="Input your Product Category" />
        </Form.Item>

        <Form.Item label="Avatar">
          <Upload
            showUploadList={false}
            name="file"
            maxCount={1}
            onRemove={() => {
              setAvatar("");
            }}
            customRequest={() => {}}
            onChange={handleUpload}
          >
            <Button
              icon={<UploadOutlined />}
              type={!avatar ? "dashed" : "default"}
            >
              {avatar ? "Change Avatar" : "Upload Avatar"}
            </Button>
          </Upload>

          {isLoadingUpload ? (
            <LoadingComponent />
          ) : (
            avatar && (
              <div>
             
                <img
                  src={avatar}
                  alt="avatar"
                  style={{
                    height: "150px",

                    borderRadius: "10px",
                  }}
                />
              </div>
            )
          )}
        </Form.Item>

        <Form.Item
          name="productFresh"
          label="Product Freshness"
          rules={[
            {
              required: true,
              message: "Please input your Product Freshness!",
            },
          ]}
        >
          <Input placeholder="Input your Product Freshness" />
        </Form.Item>

        <Form.Item
          name="productPrice"
          label="Product Price"
          rules={[
            {
              required: true,
              message: "Please input your productPrice!",
            },
          ]}
        >
          <Input placeholder="Input your productPrice" />
        </Form.Item>

        {isEdit ? (
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              loading={loadingUpdateUser}
            >
              Save
            </Button>
            <Button type="primary" onClick={handleCancel} danger>
              Cancel
            </Button>
          </Space>
        ) : (
          <Button type="primary" htmlType="submit" loading={loadingAddUser}>
            Submit
          </Button>
        )}
      </Form>

    

      {/* Table */}
      <Table
        rowKey="uuid"
        columns={TABLE_COLUMNS}
        dataSource={usersData?.users}
        loading={isUsersLoading || loadingDelete}
      />
   
</>
    );
}

export default AdminPage;
