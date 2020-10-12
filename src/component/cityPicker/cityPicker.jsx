import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./cityPicker.module.css";
import { fetchCountries } from "../../Api"

const CityPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchCountries(await fetchCountries());
        }
        fetchApi()
    }, [setFetchCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Globle</option>
                {fetchedCountries.map((country, i) => (<option key={i} value={country}>{country}</option>))}
            </NativeSelect>
        </FormControl>
    );
}

export default CityPicker;