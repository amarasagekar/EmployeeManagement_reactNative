import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";
const index = () => {
  return (
    <ScrollView>
      <LinearGradient colors={["#7E7FD5", "#E9E4F0"]} styles={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Feather name="bar-chart" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Employee Managemanet System
            </Text>
            <Entypo name="lock" size={24} color="black" />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#D3CCE3",
              padding: 12,
              borderRadius: 6,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="people-sharp" size={24} color="black" />
            </View>
            <Text style={{ marginTop: 7, fontWeight: "600" }}>
              Employee List
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#D3CCE3",
              padding: 12,
              borderRadius: 6,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="people-sharp" size={24} color="black" />
            </View>
            <Text style={{ marginTop: 7, fontWeight: "600" }}>
              Mark Attendance
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "white",
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 7,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#BE93C5",
              borderRadius: 6,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <View
              style={{
                padding: 7,
                width: 45,
                height: 45,
                borderRadius: 7,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="newspaper-outline" size={24} color="black" />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                fontWeight: "600",
                flex: 1,
              }}
            >
              Attendance Report
            </Text>
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 7,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </Pressable>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
