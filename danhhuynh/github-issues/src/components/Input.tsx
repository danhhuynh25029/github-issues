import React from 'react';
import { Input } from 'antd';
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const InputComponent : React.FC = () =>{
    return (
        <>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </>
    )
}

export default InputComponent;