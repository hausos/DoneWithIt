import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    catagory: Yup.object().required().nullable().label("Catagory"),
    description: Yup.string().required().label("Description"),
});

const catagories = [
    {label: "Furniture", value: 1},
    {label: "Clothing", value: 2},
    {label: "Electronics", value: 3},
    {label: "Cars", value: 4},
    {label: "Cameras", value: 5},
    {label: "Music", value: 6},
    {label: "Games", value: 7},
]

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>

      <AppForm
        initialValues={{ title: "", price: "", catagory: null, description: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
            autoCorrect={false}
            name="title"
            maxLength={255}
            placeholder="Title"
        />
        <AppFormField
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
        />
        <AppFormPicker
            items={catagories}
            name="catagory"
            placeholder="Category"
        />
        <AppFormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default ListingEditScreen;
