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
    if (!context.showCustomBlockSettings) {
      onBlockOpen(block)
    }
  }

  return {
    name: 'ExternalContentBlock',
    iconClass: 'es-icon-download',
    uniqueClassName: BLOCK_UNIQUE_CLASS_NAME,
    canBeSavedToLibrary: false,
    i18n: translations,
    emptyContainerIcon: true,
    blockName: 'block.name',
    blockType: 'structure', // structure should restrain the place where the block can be put
    disableSettingsPanel: true,
    isEnabled: () => true,
    getBlockLayoutToDrop,
    blockDropped,
    onSelectBlock
  }
}
