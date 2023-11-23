import translations from './translations'
import defaultLayout from './layout/defaultLayout.html'
import { BLOCK_UNIQUE_CLASS_NAME } from './constants'

export function createExternalContentBlockExtension(stripoConfig, stripoApi) {
  function getBlockLayoutToDrop() {
    return defaultLayout
  }
  const { externalContentConfig } = stripoConfig
  const { onBlockOpen } = externalContentConfig || {}

  function blockDropped(block) {
    block.find(`>.esd-structure-type`).html(stripoApi.translate('block.name'))
  }

  function onSelectBlock(block, context) {
    // debugger
    if (!context.showCustomBlockSettings) {
      // debugger
      onBlockOpen(block)
    }
  }

  // function blockDropped(block, context) {
  //   debugger
  //   onBlockOpen(block)
  //   debugger
  // }

  return {
    name: 'ExternalContentBlock',
    iconClass: 'es-icon-image',
    uniqueClassName: BLOCK_UNIQUE_CLASS_NAME,
    canBeSavedToLibrary: false,
    i18n: translations,
    blockName: 'block.name',
    blockType: 'block',
    disableSettingsPanel: true,
    isEnabled: () => true,
    getBlockLayoutToDrop,
    blockDropped,
    onSelectBlock
  }
}
