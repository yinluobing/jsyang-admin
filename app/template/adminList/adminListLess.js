module.exports = packageName => (`
@import '~antd/lib/style/themes/default.less';
@import '~@/utils/utils.less';

.standardList {
  :global {
    .ant-card-head {
      border-bottom: none;
    }
    .ant-card-head-title {
      line-height: 32px;
      padding: 24px 0;
    }
    .ant-card-extra {
      padding: 24px 0;
    }
    .ant-list-pagination {
      text-align: right;
      margin-top: 24px;
    }
    .ant-avatar-lg {
      width: 48px;
      height: 48px;
      line-height: 48px;
    }
  }
  .headerInfo {
    position: relative;
    text-align: center;
    & > span {
      color: @text-color-secondary;
      display: inline-block;
      font-size: @font-size-base;
      line-height: 22px;
      margin-bottom: 4px;
    }
    & > p {
      color: @heading-color;
      font-size: 24px;
      line-height: 32px;
      margin: 0;
    }
    & > em {
      background-color: @border-color-split;
      position: absolute;
      height: 56px;
      width: 1px;
      top: 0;
      right: 0;
    }
  }
  .listContent {
    font-size: 0;
    .listContentItem {
      color: @text-color-secondary;
      display: inline-block;
      vertical-align: middle;
      font-size: @font-size-base;
      margin-left: 40px;
      > span {
        line-height: 20px;
      }
      > p {
        margin-top: 4px;
        margin-bottom: 0;
        line-height: 22px;
      }
    }
  }
  .extraContentSearch {
    margin-left: 16px;
    width: 272px;
  }
}

@media screen and (max-width: @screen-xs) {
  .standardList {
    :global {
      .ant-list-item-content {
        display: block;
        flex: none;
        width: 100%;
      }
      .ant-list-item-action {
        margin-left: 0;
      }
    }
    .listContent {
      margin-left: 0;
      & > div {
        margin-left: 0;
      }
    }
    .listCard {
      :global {
        .ant-card-head-title {
          overflow: visible;
        }
      }
    }
  }
}

@media screen and (max-width: @screen-sm) {
  .standardList {
    .extraContentSearch {
      margin-left: 0;
      width: 100%;
    }
    .headerInfo {
      margin-bottom: 16px;
      & > em {
        display: none;
      }
    }
  }
}

@media screen and (max-width: @screen-md) {
  .standardList {
    .listContent {
      & > div {
        display: block;
      }
      & > div:last-child {
        top: 0;
        width: 100%;
      }
    }
  }
  .listCard {
    :global {
      .ant-radio-group {
        display: block;
        margin-bottom: 8px;
      }
    }
  }
}

@media screen and (max-width: @screen-lg) and (min-width: @screen-md) {
  .standardList {
    .listContent {
      & > div {
        display: block;
      }
      & > div:last-child {
        top: 0;
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: @screen-xl) {
  .standardList {
    .listContent {
      & > div {
        margin-left: 24px;
      }
      & > div:last-child {
        top: 0;
      }
    }
  }
}

@media screen and (max-width: 1400px) {
  .standardList {
    .listContent {
      text-align: right;
      & > div:last-child {
        top: 0;
      }
    }
  }
}

.standardListForm {
  :global {
    .ant-form-item {
      margin-bottom: 12px;
      &:last-child {
        padding-top: 4px;
        margin-bottom: 32px;
      }
    }
  }
}

.formResult {
  width: 100%;
  [class^='title'] {
    margin-bottom: 8px;
  }
}

`)
