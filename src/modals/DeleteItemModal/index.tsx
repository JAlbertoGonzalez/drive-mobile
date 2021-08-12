import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Modal from 'react-native-modalbox';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { fileActions, layoutActions } from '../../redux/actions';
import { Reducers } from '../../redux/reducers/reducers';
import * as Unicons from '@iconscout/react-native-unicons';
import Separator from '../../components/Separator';

function DeleteItemModal(props: Reducers) {
  const selectedItems = props.filesState.selectedItems
  const currentFolderId = props.filesState.folderContent && props.filesState.folderContent.currentFolder
  const [isOpen, setIsOpen] = useState(props.layoutState.showDeleteModal)

  useEffect(() => {
    props.layoutState.showDeleteModal ? setIsOpen(true) : null
  }, [props.layoutState])

  const handleDeleteSelectedItem = () => {
    props.dispatch(fileActions.deleteItems(selectedItems, currentFolderId))
  }

  return (
    <Modal
      isOpen={isOpen}
      swipeArea={2}
      coverScreen={true}
      onClosed={() => {
        props.dispatch(layoutActions.closeDeleteModal())
        setIsOpen(false)
      }}
      position='bottom'
      style={styles.modalContainer}
    >
      <View>

        <View style={styles.drawerKnob}></View>

        <View>
          <Text style={{
            textAlign: 'center',
            fontFamily: 'NeueEinstellung-Bold'
          }}>Delete item</Text>
        </View>

        <View>
          <Text style={{
            textAlign: 'center',
            fontFamily: 'NeueEinstellung-Regular',
            margin: 10
          }}>Are you sure you want to delete this item?</Text>
        </View>

        <Separator />

        <View>
          <TouchableHighlight
            underlayColor={'#eee'}
            onPress={() => {
              handleDeleteSelectedItem();
              setIsOpen(false)
            }}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', padding: 20, paddingLeft: 20 }}>
              <View style={{ paddingRight: 10 }}>
                <Unicons.UilTrashAlt color="#DA1E28" size={30} />
              </View>
              <View>
                <Text style={{ fontFamily: 'NeueEinstellung-Regular', color: '#DA1E28' }}>Delete permanently</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <Separator />

        <View>
          <TouchableHighlight
            underlayColor={'#eee'}
            style={{
              alignItems: 'center',
              padding: 20
            }}
            onPress={() => {
              setIsOpen(false)
            }}>
            <Text style={{ color: '#DA1E28' }}>Cancel</Text>
          </TouchableHighlight>
        </View>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  drawerKnob: {
    alignSelf: 'center',
    backgroundColor: '#0F62FE',
    borderRadius: 4,
    height: 4,
    margin: 12,
    width: 50
  },
  modalContainer: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: hp('90%') < 550 ? 550 : Math.min(380, hp('90%')),
    marginTop: wp('12')
  }
})

const mapStateToProps = (state: any) => {
  return { ...state }
};

export default connect(mapStateToProps)(DeleteItemModal)