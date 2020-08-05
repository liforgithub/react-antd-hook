import React, { useState } from 'react'
import { Select, Spin } from 'antd'
import styles from './geographicView.less'

const GeographicView = ({ province, city  }) => {

    const [loading, setLoading] = useState(false)

    const getProvinceOption = () => {
        const province = [];

        if (province) {
            return getOption(province);
        }

        return [];
    }

    const getCityOption = () => {
        const city = [];

        if (city) {
            return getOption(city);
        }

        return [];
    };

    const getOption = list => {
        if (!list || list.length < 1) {
            return (
            <Select.Option key={0} value={0}>
                没有找到选项
            </Select.Option>
            );
        }

        return list.map(item => (
            <Select.Option key={item.id} value={item.id}>
            {item.name}
            </Select.Option>
        ));
    };

    const selectProvinceItem = item => {
        //fetch
    }

    const selectCityItem = item => {

    }

    return (
        <Spin spinning={loading} wrapperClassName={styles.row}>
            <Select
                className={styles.item}
                value={province}
                labelInValue
                showSearch
                onSelect={selectProvinceItem}
            >
                {getProvinceOption()}
            </Select>
            <Select
                className={styles.item}
                value={city}
                labelInValue
                showSearch
                onSelect={selectCityItem}
            >
                {getCityOption()}
            </Select>
      </Spin>
    )
}

export default GeographicView