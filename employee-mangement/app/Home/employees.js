import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const employees = () => {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log("error feteching employee data", error);
      }
      fetchEmployeeData();
    };
  }, []);
  console.log(employees);

  return (
    <View styles={{ flex: 1, backgroundColor: "white" }}>
      <View
        styles={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Ionicons
          styles={{ marginLeft: 10 }}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            height: 40,
            borderRadius: 4,
          }}
        >
          <AntDesign name="serahc1" size={20} color="black" />
          <TextInput
            value={input}
            onChnageText={(text) => setInput(text)}
            style={{ flex: 1 }}
            placeholder="Search"
          />

          {employees.length > 0 && (
            <View>
              <Pressable>
                <AntDesign name="pluscircle" size={24} color="#0072b1" />
              </Pressable>
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default employees;

const styles = StyleSheet.create({});
