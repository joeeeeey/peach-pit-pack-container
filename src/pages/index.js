  

import React, { Component } from 'react';
import withRoot from '../withRoot';    
import PreviewRoot from '../components/preview/root'
import PreviewVerticalLayout from '../components/preview/verticalLayout'
import PreviewVerticalGrid from '../components/preview/verticalGrid'
import PreviewTextArea from '../components/preview/textArea'
import PreviewImageArea from '../components/preview/imageArea'
    
class Index extends Component {
  render() {
    return (
    React.createElement(
        PreviewRoot,
        {"selfkey":"Root_a9c05f404801d35b55a7535ea63b6b5e","parentkey":"root"},
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"#81D4FA","backgroundType":"pureColor","imageInfo":{"width":640,"height":426},"fillType":"stretch","enableParallex":true},"flex":[4,4,4],"id":"VerticalLayout_ab7e4f9b060fd57b7c0966e1ca19d4a8","selfkey":"VerticalLayout_14ce458587c967505dda3deb8533ad21","parentkey":"Root_a9c05f404801d35b55a7535ea63b6b5e"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_0a99d05d54247a036f9395e9fc2535ac","parentkey":"VerticalLayout_14ce458587c967505dda3deb8533ad21"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"这个图片倒了","attributes":{"font":"serif"}},{"insert":"\n","attributes":{"align":"center","header":1}}],"readOnly":false,"selfkey":"TextArea_c2c90dc5299754d2676b120b165c91d8","parentkey":"VerticalGrid_0a99d05d54247a036f9395e9fc2535ac"}
    ),
React.createElement(
        PreviewImageArea,
        {"src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/layout/8/9731723d89e723d93ccce2df3bafac9f","selfkey":"ImageArea_83cf1b8fd2a1ff3f91e96cc5c07766e2","parentkey":"VerticalGrid_0a99d05d54247a036f9395e9fc2535ac"}
    )
    ),
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_d5eb6350a4453b6316e2b3f468576cb2","parentkey":"VerticalLayout_14ce458587c967505dda3deb8533ad21"},
React.createElement(
        PreviewImageArea,
        {"src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/layout/8/df474509fbd8cfd46fd29e6041cf4824","selfkey":"ImageArea_996103a3c297d4f8398e56f40a4b55f6","parentkey":"VerticalGrid_d5eb6350a4453b6316e2b3f468576cb2"}
    ),
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"骚到","attributes":{"font":"serif"}},{"insert":"\n","attributes":{"align":"center","header":1}}],"readOnly":false,"selfkey":"TextArea_c5e21360e24548ad475e054252317778","parentkey":"VerticalGrid_d5eb6350a4453b6316e2b3f468576cb2"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"/images/IMG_7881.jpg","selfkey":"ImageArea_934cd8aa09163a81d3a1e0d334242a9b","parentkey":"VerticalGrid_d5eb6350a4453b6316e2b3f468576cb2"}
    )
    ),
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_3db868aa3c781eec0041b5559b0c6089","parentkey":"VerticalLayout_14ce458587c967505dda3deb8533ad21"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"右护法"},{"insert":"\n","attributes":{"align":"center","header":1}}],"readOnly":false,"selfkey":"TextArea_8e1f1667d829c10388574ecf176349e9","parentkey":"VerticalGrid_3db868aa3c781eec0041b5559b0c6089"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"/images/IMG_7881.jpg","selfkey":"ImageArea_7a107949a4e88407652e1bc699fef15b","parentkey":"VerticalGrid_3db868aa3c781eec0041b5559b0c6089"}
    )
    )
    ),
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"#b1d3db","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"id":"VerticalLayout_bdb1145fcb5cb642eb9ec4bfe39fda31","selfkey":"VerticalLayout_30828244b64141b3225290fa29dce288","parentkey":"Root_a9c05f404801d35b55a7535ea63b6b5e"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_ba55d843894913285bbb37e392f9cf55","parentkey":"VerticalLayout_30828244b64141b3225290fa29dce288"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"dgdfsgfsdf","attributes":{"font":"serif"}},{"insert":"\n","attributes":{"align":"center","header":1}}],"readOnly":false,"selfkey":"TextArea_fffcf19c45a8a7d5028ee457743e86e9","parentkey":"VerticalGrid_ba55d843894913285bbb37e392f9cf55"}
    ),
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"在此输入gtgtg","attributes":{"font":"serif"}},{"insert":"\n","attributes":{"align":"center","header":1}}],"readOnly":false,"selfkey":"TextArea_c878238ef30d6eb515dde7723e2e1337","parentkey":"VerticalGrid_ba55d843894913285bbb37e392f9cf55"}
    )
    ),
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_9dec710f830d7e83066e5502dac65f2c","parentkey":"VerticalLayout_30828244b64141b3225290fa29dce288"}
    )
    )
    )
   );
  }
}

export default withRoot(Index);    


