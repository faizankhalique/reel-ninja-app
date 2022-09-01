import { StyleSheet, Pressable,ImageBackground, View, Image,Modal } from "react-native";
import React from "react";

export default function CustomModal(props) {
    const {modalVisible,setModalVisible,containerStyles}=props;

  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView,containerStyles]}>
        
            {props.children}
          </View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({ centeredView: {
    flex: 1,
    justifyContent:"center",alignItems:"center"
  },
  modalView: {
    //   height:"100%",
    //   width:"100%",
    position:"relative",
    // borderWidth: 0.2,
    // borderTopColor: "#10B9D0",
    // flex: 1,
    // marginTop: 20,
    // backgroundColor: "#11112E",
    // overflow:"hidden",
    // borderTopRightRadius: 88,
    // borderTopLeftRadius: 88,
    // paddingTop: 30,
    // // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
