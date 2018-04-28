    
import React, { Component } from 'react';
import withRoot from '../withRoot';    
import PreviewNavBar from '../components/preview/navBar'
import PreviewImageArea from '../components/preview/imageArea'
import PreviewTextArea from '../components/preview/textArea'
import PreviewVerticalLayout from '../components/preview/verticalLayout'
import PreviewVerticalGrid from '../components/preview/verticalGrid'
import PreviewPhotoGallery from '../components/preview/photoGallery'
    
class Index extends Component {
  render() {
    return (
    React.createElement(
        "div",
        {"style":{"paddingTop":64},"selfkey":"Root_df450442d273013c2ef27fa9767948c6","parentkey":"root"},
React.createElement(
        PreviewNavBar,
        {"affectRoot":{"paddingTop":64},"rootChildren":[{"id":"VerticalLayout_5738168ec8888a0e454deba5c8482b91","name":"首页","nodeName":"VerticalLayout"},{"id":"VerticalLayout_d28d494b9d5b6d216245a3f8b69a2cd7","name":"关于","nodeName":"VerticalLayout"},{"id":"37505258","name":"品质","nodeName":"div"},{"id":"11260632","name":"展示","nodeName":"div"},{"id":"VerticalLayout_05ed66094b9cf867440e6adc5ed09e2c","name":"常见问题","nodeName":"VerticalLayout"},{"id":"VerticalLayout_c265ed96dd414c985e4f5c3f00002e4c","name":"联系我们","nodeName":"VerticalLayout"}],"selfkey":"NavBar_6c16e4cfb1db3e3b6f239971d27c5cb9","parentkey":"Root_df450442d273013c2ef27fa9767948c6"},
React.createElement(
        PreviewImageArea,
        {"imageStyle":{"maxWidth":130,"maxHeight":40.6},"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/8419e0cee9e352e903578504e8b0fefc","selfkey":"ImageArea_c5d435a6606e0c672d50e1f475c53ce9","parentkey":"NavBar_6c16e4cfb1db3e3b6f239971d27c5cb9"}
    ),
React.createElement(
        PreviewTextArea,
        {"formats":["header","font","size","bold","italic","underline","strike","blockquote","bullet","link","color","align","script","direction","clean"],"toolbarAbove":false,"toolbarOverlayStyle":{"bottom":-75},"toolbarStyle":{"width":300},"deltaDeltaValue":[{"insert":"桃核家具"},{"insert":"\n","attributes":{"header":2}}],"selfkey":"TextArea_c4afba7d3ffc28d137e28a779af9d650","parentkey":"NavBar_6c16e4cfb1db3e3b6f239971d27c5cb9"}
    )
    ),
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"url(http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/eb5662fc91d83e20c700ca23376b1cbc)","backgroundType":"image","imageInfo":{"width":1060,"height":666},"fillType":"stretch","enableParallex":true},"id":"VerticalLayout_5738168ec8888a0e454deba5c8482b91","flex":[12],"selfkey":"VerticalLayout_243d75898acc7bdcdf87a12dbbcda718","parentkey":"Root_df450442d273013c2ef27fa9767948c6"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_b64f19b27a37cdf09a500d8a699cae4b","parentkey":"VerticalLayout_243d75898acc7bdcdf87a12dbbcda718"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"\n","attributes":{"align":"center","header":1}},{"insert":"\n\n","attributes":{"align":"center"}},{"insert":"      遇见最好的家具","attributes":{"color":"#ffffff","size":"large","bold":true}},{"insert":"\n","attributes":{"indent":3,"header":1}},{"insert":"\t\t\t\t\t\t\t\t\t\t\t"},{"insert":"\n","attributes":{"header":4}},{"insert":"\t\t\t\t\t\t\t            "},{"insert":"超过200年家具制造经验，选用进口原料，为你的家创造温馨环境。","attributes":{"size":"large","color":"#ffffff"}},{"insert":"\n","attributes":{"indent":4,"header":4}},{"insert":"\n\n\n\n\n\n","attributes":{"align":"center"}}],"readOnly":false,"selfkey":"TextArea_792a25b66ea40384b4aec63e6aaa0f1f","parentkey":"VerticalGrid_b64f19b27a37cdf09a500d8a699cae4b"}
    )
    )
    ),
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"#ffffff","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"id":"VerticalLayout_d28d494b9d5b6d216245a3f8b69a2cd7","flex":[12],"selfkey":"VerticalLayout_b93900c6955a85f74f8670f881a24a2d","parentkey":"Root_df450442d273013c2ef27fa9767948c6"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_daa42ed6229b886a2fa9ba109c4e0311","parentkey":"VerticalLayout_b93900c6955a85f74f8670f881a24a2d"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"关于桃核家具","attributes":{"size":"large","color":"#ff9900","bold":true}},{"insert":"\n","attributes":{"align":"center","header":2}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"桃核家具创始于 1818 年的毗陵，荟萃世界各地不同国家和不同时期的家居风格，为城市公寓、乡村别墅、花园洋房等不同户型提供了针对性的家居解决方案，满足不同人群关于生活的需求。","attributes":{"color":"#888888","bold":true}},{"insert":"\n\n","attributes":{"align":"center"}},{"insert":" 桃核家具是融自主产品设计、风格创意、生产制造、销售服务于一体的家居品牌，对每个环节负责，信守对顾客的承诺。涵盖整体供应链的同时，面向全球采购。从免费设计咨询到消费信贷服务，从预约本地配送安装到尊贵沙龙服务，提供家居整体解决方案，为消费者的家居梦想，我们期望做到更多。","attributes":{"color":"#888888","bold":true}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"\n","attributes":{"align":"center","header":1}}],"readOnly":false,"selfkey":"TextArea_43fc4030550388c1b1e34454dc48b1b6","parentkey":"VerticalGrid_daa42ed6229b886a2fa9ba109c4e0311"}
    )
    )
    ),
React.createElement(
        "div",
        {"style":{},"id":"37505258","selfkey":"div_89cfc77b45e07b68f9e13e682c76757b","parentkey":"Root_df450442d273013c2ef27fa9767948c6"},
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"white","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"id":"VerticalLayout_faf88629325f399bcc296c81d5f854f2","flex":[12],"selfkey":"VerticalLayout_aaa27ff49b592c86c7583847546ef4f6","parentkey":"div_89cfc77b45e07b68f9e13e682c76757b"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_f7ee81d72e6f10a3f227e99f683e9acb","parentkey":"VerticalLayout_aaa27ff49b592c86c7583847546ef4f6"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"出色品质","attributes":{"size":"large","bold":true}},{"insert":"\n","attributes":{"align":"center","header":2}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"选择桃核家具的理由","attributes":{"color":"#ff9900","size":"large"}},{"insert":"\n","attributes":{"align":"center","header":4}}],"readOnly":false,"selfkey":"TextArea_8f61757c3d50165d66edbc05eebf8fe0","parentkey":"VerticalGrid_f7ee81d72e6f10a3f227e99f683e9acb"}
    )
    )
    ),
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"white","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"id":"VerticalLayout_339e7c9f8d6e8ecac11ccd166d16fa9a","flex":[4,4,4],"selfkey":"VerticalLayout_6e588e7c6212efd885326b5e62fc5692","parentkey":"div_89cfc77b45e07b68f9e13e682c76757b"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_c7c6543b8c6cb74cd9c86ee42b08f2a8","parentkey":"VerticalLayout_6e588e7c6212efd885326b5e62fc5692"},
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/ce0bb5d34c761870278be3fe870a89d1","selfkey":"ImageArea_f55dbe45d65662779c46566a679106e0","parentkey":"VerticalGrid_c7c6543b8c6cb74cd9c86ee42b08f2a8"}
    ),
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"高品质原料"},{"insert":"\n","attributes":{"align":"center","header":3}},{"insert":"\n","attributes":{"align":"center","header":6}},{"insert":"进口高端健康材质","attributes":{"color":"#ff9900","bold":true}},{"insert":"\n","attributes":{"align":"center","header":3}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"100%纯天然高端原木，清新自然，不伤身。同时拥有很可靠的坚硬度，使用寿命长达100年！"},{"insert":"\n","attributes":{"align":"center"}}],"readOnly":false,"selfkey":"TextArea_ce33b3e3c6fa8cfd235732a17b5d1048","parentkey":"VerticalGrid_c7c6543b8c6cb74cd9c86ee42b08f2a8"}
    )
    ),
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_ee43c96dee811ee96801669c222decd3","parentkey":"VerticalLayout_6e588e7c6212efd885326b5e62fc5692"},
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/a96322da6ff86340da9a23bc2fbb59a6","selfkey":"ImageArea_63997c32d14564a017567cc4d8d7b168","parentkey":"VerticalGrid_ee43c96dee811ee96801669c222decd3"}
    ),
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"灵活易安装"},{"insert":"\n","attributes":{"align":"center","header":3}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"像搭积木一样简单","attributes":{"color":"#ff9900","bold":true}},{"insert":"\n","attributes":{"align":"center","header":3}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"100%纯天然高端原木，清新自然，不伤身。同时拥有很可靠的坚硬度，使用寿命长达100年！"},{"insert":"\n","attributes":{"align":"center"}}],"readOnly":false,"selfkey":"TextArea_66ba0e8063058864196ac29551de5e5c","parentkey":"VerticalGrid_ee43c96dee811ee96801669c222decd3"}
    )
    ),
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_61f8ec74d0b5e1bc16abf3a6acc90731","parentkey":"VerticalLayout_6e588e7c6212efd885326b5e62fc5692"},
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/15671088902597f03ce5934953d55470","selfkey":"ImageArea_ef8fadd409e8062cc6226abd790b7e9a","parentkey":"VerticalGrid_61f8ec74d0b5e1bc16abf3a6acc90731"}
    ),
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"北欧极简设计风"},{"insert":"\n","attributes":{"align":"center","header":3}},{"insert":"\n","attributes":{"align":"center","header":6}},{"insert":"引领新的家装潮流","attributes":{"color":"#ff9900","bold":true}},{"insert":"\n","attributes":{"align":"center","header":3}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"我们专业的设计师深得设计理念，将极简精神融入产品中，为你的家增添时代感。"},{"insert":"\n","attributes":{"align":"center"}}],"readOnly":false,"selfkey":"TextArea_9d3eceb03d8fd902f6b4c57fe75491c4","parentkey":"VerticalGrid_61f8ec74d0b5e1bc16abf3a6acc90731"}
    )
    )
    )
    ),
React.createElement(
        "div",
        {"style":{},"id":"11260632","selfkey":"div_94c7e90d466cb3921f0b1e7592463fd2","parentkey":"Root_df450442d273013c2ef27fa9767948c6"},
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"white","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"id":"VerticalLayout_cc73ac8969b32551e216c9276e46f23b","flex":[12],"selfkey":"VerticalLayout_e121d42e05f2fef96e98bd2235e1e800","parentkey":"div_94c7e90d466cb3921f0b1e7592463fd2"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_96799f064fad5bc20198b954d7123881","parentkey":"VerticalLayout_e121d42e05f2fef96e98bd2235e1e800"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"家具展示","attributes":{"size":"large","bold":true}},{"insert":"\n","attributes":{"align":"center","header":2}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"各个角度，艺术呈现","attributes":{"color":"#ffc266"}},{"insert":"\n","attributes":{"align":"center","header":3}}],"readOnly":false,"selfkey":"TextArea_bee4898270d3edc6e87a8a2ee95c40e9","parentkey":"VerticalGrid_96799f064fad5bc20198b954d7123881"}
    )
    )
    ),
React.createElement(
        PreviewPhotoGallery,
        {"backgroundInfo":{"background":"white","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"imgContainerMargin":5,"intensity":4,"galleryWidth":72,"id":"PhotoGallery_c9d2a355dcd85e47cb2cd5d17cf171f2","selfkey":"PhotoGallery_7e72c4c23f2e055b5b36a1527dc8ce43","parentkey":"div_94c7e90d466cb3921f0b1e7592463fd2"},
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/e27abd953177fbf27ebfad403f9fffb6","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_c8cafada398f37af112abde70be83037","parentkey":"PhotoGallery_7e72c4c23f2e055b5b36a1527dc8ce43"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/2156d4338c4c758b73c1a9d79289b2d0","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_df6c247f0aded41898f4c3edbca61558","parentkey":"PhotoGallery_7e72c4c23f2e055b5b36a1527dc8ce43"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/4fb134a179cf85076c365e4b5a37247c","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_e9737408264fe52401786f8f5dc029e4","parentkey":"PhotoGallery_7e72c4c23f2e055b5b36a1527dc8ce43"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/f2fbb887e763ab86a774611144a1ac5a","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_169ab3a20711a1fe0aeb4a7c60006f5b","parentkey":"PhotoGallery_7e72c4c23f2e055b5b36a1527dc8ce43"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/0572b493c77226fa00d5c8c860ae7a6b","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_a9dddf26d5faf4aa7c6125ef78523080","parentkey":"PhotoGallery_7e72c4c23f2e055b5b36a1527dc8ce43"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/3f3caae8ef2388500705042c027b561a","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_f865ed7d150372b3759112c822ce7b4f","parentkey":"PhotoGallery_7e72c4c23f2e055b5b36a1527dc8ce43"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/28f1572f1bd1a32adfca33ab3cf3d476","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_b04575848480803be2a28610fd0c12e0","parentkey":"PhotoGallery_7e72c4c23f2e055b5b36a1527dc8ce43"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/331473f9e4d44c1facf3d93d51c390c2","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_96fc5ecc897cfd58a0524886bfd3f588","parentkey":"PhotoGallery_7e72c4c23f2e055b5b36a1527dc8ce43"}
    )
    )
    ),
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"white","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"id":"VerticalLayout_05ed66094b9cf867440e6adc5ed09e2c","flex":[12],"selfkey":"VerticalLayout_df2e92a7f38d0afbd863372b6b97681d","parentkey":"Root_df450442d273013c2ef27fa9767948c6"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_38c799a59336603b266c78913f67038d","parentkey":"VerticalLayout_df2e92a7f38d0afbd863372b6b97681d"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"常见问题","attributes":{"color":"#ff9900","size":"large","bold":true}},{"insert":"\n","attributes":{"align":"center","header":2}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"关于桃核家具的详细说明","attributes":{"color":"#bbbbbb","bold":true}},{"insert":"\n\n","attributes":{"align":"center","header":3}},{"insert":"出售的家具售后服务是怎么样的？"},{"insert":"\n","attributes":{"header":3}},{"insert":"\n在出售后的30天内，可自由更换同款的其他规格、款式设计的产品。\n此外，在使用的2年内，出现产品质量性的问题，都可以享受全额退款服务！\n\n是否提供定制化的服务？"},{"insert":"\n","attributes":{"header":3}},{"insert":"\n我们提供定制化的需求，如果您希望更深度的定制，例如颜色、材质、规格，请在最下方联系我们，我们的设计团队会根据您的需求为你报价。期待您的来信！\n\n线下配送服务"},{"insert":"\n","attributes":{"header":3}},{"insert":"\n您可以选择自提或者标准快递服务，通常快递服务达到时间将根据您所在的位置决定。\n全国购物满600元即可享受包邮服务。\n\n"},{"insert":"\n\n\n","attributes":{"align":"center"}}],"readOnly":false,"selfkey":"TextArea_cbb743349d1654533f48c82ef0011582","parentkey":"VerticalGrid_38c799a59336603b266c78913f67038d"}
    )
    )
    ),
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"white","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"id":"VerticalLayout_c265ed96dd414c985e4f5c3f00002e4c","flex":[12],"selfkey":"VerticalLayout_2b3f746b2c42215fb505974222b2ceac","parentkey":"Root_df450442d273013c2ef27fa9767948c6"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_931d17a31f9ff62d24e275a19a06e8d5","parentkey":"VerticalLayout_2b3f746b2c42215fb505974222b2ceac"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"联系我们","attributes":{"size":"large","bold":true}},{"insert":"\n","attributes":{"align":"center","header":2}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"我们与您一样，爱上你的家"},{"insert":"\n","attributes":{"align":"center","header":3}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"https://www.taohespace.com","attributes":{"font":"serif"}},{"insert":"\n\n","attributes":{"align":"center"}},{"insert":"\n","attributes":{"align":"center","header":1}},{"insert":"\n\n\n\n\n\n\n","attributes":{"align":"center"}},{"insert":"\n\n\n\n\n\n\n\n\n\n—————————————————————————————————————————————————————————————————————"},{"insert":"\n","attributes":{"align":"center"}},{"insert":"假装有备案的底部"},{"insert":"\n","attributes":{"align":"center"}},{"insert":"Copyright 2018 -- Joey"},{"insert":"\n","attributes":{"align":"center"}}],"readOnly":false,"selfkey":"TextArea_6217d3b6896a68d078587b2fc9ab2b65","parentkey":"VerticalGrid_931d17a31f9ff62d24e275a19a06e8d5"}
    )
    )
    )
    )
   );
  }
}

export default withRoot(Index);    
    
  
