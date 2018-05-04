    
import React, { Component } from 'react';
import withRoot from '../withRoot';    
import PreviewRoot from '../components/preview/root'
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
        PreviewRoot,
        {"style":{"paddingTop":64},"selfkey":"Root_e9a3766e1f73550c0e0add5392bea0ea","parentkey":"root"},
React.createElement(
        PreviewNavBar,
        {"affectRoot":{"paddingTop":64},"rootChildren":[{"id":"VerticalLayout_5738168ec8888a0e454deba5c8482b91","name":"首页","nodeName":"VerticalLayout"},{"id":"VerticalLayout_d28d494b9d5b6d216245a3f8b69a2cd7","name":"关于","nodeName":"VerticalLayout"},{"id":"37505258","name":"品质","nodeName":"div"},{"id":"11260632","name":"展示","nodeName":"div"},{"id":"VerticalLayout_05ed66094b9cf867440e6adc5ed09e2c","name":"常见问题","nodeName":"VerticalLayout"},{"id":"VerticalLayout_c265ed96dd414c985e4f5c3f00002e4c","name":"联系我们","nodeName":"VerticalLayout"}],"selfkey":"NavBar_a53e1aace249fa8c04dc278d3f6c6792","parentkey":"Root_e9a3766e1f73550c0e0add5392bea0ea"},
React.createElement(
        PreviewImageArea,
        {"imageStyle":{"maxWidth":130,"maxHeight":40.6},"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/8419e0cee9e352e903578504e8b0fefc","selfkey":"ImageArea_96343e98fab6c7478fba724639b0d6d4","parentkey":"NavBar_a53e1aace249fa8c04dc278d3f6c6792"}
    ),
React.createElement(
        PreviewTextArea,
        {"formats":["header","font","size","bold","italic","underline","strike","blockquote","bullet","link","color","align","script","direction","clean"],"toolbarAbove":false,"toolbarOverlayStyle":{"bottom":-75},"toolbarStyle":{"width":300},"deltaDeltaValue":[{"insert":"桃核家具"},{"insert":"\n","attributes":{"header":2}}],"selfkey":"TextArea_9f175ccfca7e1237bd56bab4d7385e09","parentkey":"NavBar_a53e1aace249fa8c04dc278d3f6c6792"}
    )
    ),
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"url(http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/eb5662fc91d83e20c700ca23376b1cbc)","backgroundType":"image","imageInfo":{"width":1060,"height":666},"fillType":"stretch","enableParallex":true},"id":"VerticalLayout_5738168ec8888a0e454deba5c8482b91","flex":[12],"selfkey":"VerticalLayout_056095ed4ddcefb473c6b6bea9b990b5","parentkey":"Root_e9a3766e1f73550c0e0add5392bea0ea"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_9076d0ed80a492737c577ea344ba62e3","parentkey":"VerticalLayout_056095ed4ddcefb473c6b6bea9b990b5"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"\n","attributes":{"align":"center","header":1}},{"insert":"\n\n","attributes":{"align":"center"}},{"insert":"      遇见最好的家具","attributes":{"color":"#ffffff","size":"large","bold":true}},{"insert":"\n","attributes":{"indent":3,"align":"center","header":1}},{"insert":"\t\t\t\t\t\t\t\t\t\t"},{"insert":"\n\n","attributes":{"header":4}},{"insert":"\t\t\t\t\t\t\t            "},{"insert":"超过200年家具制造经验，选用进口原料，为你的家创造温馨环境。","attributes":{"size":"large","color":"#ffffff"}},{"insert":"\n","attributes":{"align":"center","header":4}},{"insert":"\n\n\n\n\n\n","attributes":{"align":"center"}}],"readOnly":false,"selfkey":"TextArea_cda3b8690c05ebcbc50de1e759b8accf","parentkey":"VerticalGrid_9076d0ed80a492737c577ea344ba62e3"}
    )
    )
    ),
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"#ffffff","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"id":"VerticalLayout_d28d494b9d5b6d216245a3f8b69a2cd7","flex":[12],"selfkey":"VerticalLayout_200db6f79a3ec849f377b2be20b5382c","parentkey":"Root_e9a3766e1f73550c0e0add5392bea0ea"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_8163af90a1382ee094ae9ba4f45039f5","parentkey":"VerticalLayout_200db6f79a3ec849f377b2be20b5382c"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"关于桃核家具","attributes":{"size":"large","color":"#ff9900","bold":true}},{"insert":"\n","attributes":{"align":"center","header":2}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"桃核家具创始于 1818 年的毗陵，荟萃世界各地不同国家和不同时期的家居风格，为城市公寓、乡村别墅、花园洋房等不同户型提供了针对性的家居解决方案，满足不同人群关于生活的需求。","attributes":{"color":"#888888","bold":true}},{"insert":"\n\n","attributes":{"align":"center"}},{"insert":" 桃核家具是融自主产品设计、风格创意、生产制造、销售服务于一体的家居品牌，对每个环节负责，信守对顾客的承诺。涵盖整体供应链的同时，面向全球采购。从免费设计咨询到消费信贷服务，从预约本地配送安装到尊贵沙龙服务，提供家居整体解决方案，为消费者的家居梦想，我们期望做到更多。","attributes":{"color":"#888888","bold":true}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"\n","attributes":{"align":"center","header":1}}],"readOnly":false,"selfkey":"TextArea_084bb1a3084f9fca9730c84f6b5df9d9","parentkey":"VerticalGrid_8163af90a1382ee094ae9ba4f45039f5"}
    )
    )
    ),
React.createElement(
        "div",
        {"style":{},"id":"37505258","selfkey":"div_20da1a49af3e69a3ad8aaffbba589328","parentkey":"Root_e9a3766e1f73550c0e0add5392bea0ea"},
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"white","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"id":"VerticalLayout_faf88629325f399bcc296c81d5f854f2","flex":[12],"selfkey":"VerticalLayout_934cc68c92879fc312a51c359c6d2f0c","parentkey":"div_20da1a49af3e69a3ad8aaffbba589328"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_bc322c7ade4c09149f4a72d00ac65e2d","parentkey":"VerticalLayout_934cc68c92879fc312a51c359c6d2f0c"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"出色品质","attributes":{"size":"large","bold":true}},{"insert":"\n","attributes":{"align":"center","header":2}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"选择桃核家具的理由","attributes":{"color":"#ff9900","size":"large"}},{"insert":"\n","attributes":{"align":"center","header":4}}],"readOnly":false,"selfkey":"TextArea_81fa53dedf87f5fbaa5a9cfa1ef979e1","parentkey":"VerticalGrid_bc322c7ade4c09149f4a72d00ac65e2d"}
    )
    )
    ),
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"white","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"id":"VerticalLayout_339e7c9f8d6e8ecac11ccd166d16fa9a","flex":[4,4,4],"selfkey":"VerticalLayout_1728201086bd15b502ddf5ef2dc2bb74","parentkey":"div_20da1a49af3e69a3ad8aaffbba589328"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_ad43026fa709dacb0a4c741dff7d24b5","parentkey":"VerticalLayout_1728201086bd15b502ddf5ef2dc2bb74"},
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/ce0bb5d34c761870278be3fe870a89d1","selfkey":"ImageArea_08649efa0d050a192175f0f65a7b75f2","parentkey":"VerticalGrid_ad43026fa709dacb0a4c741dff7d24b5"}
    ),
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"高品质原料"},{"insert":"\n","attributes":{"align":"center","header":3}},{"insert":"\n","attributes":{"align":"center","header":6}},{"insert":"进口高端健康材质","attributes":{"color":"#ff9900","bold":true}},{"insert":"\n","attributes":{"align":"center","header":3}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"100%纯天然高端原木，清新自然，不伤身。同时拥有很可靠的坚硬度，使用寿命长达100年！"},{"insert":"\n","attributes":{"align":"center"}}],"readOnly":false,"selfkey":"TextArea_490ca72173543cd2fb3e638a0139ce1c","parentkey":"VerticalGrid_ad43026fa709dacb0a4c741dff7d24b5"}
    )
    ),
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_12c1169a1b3e062ec59c9729590a3d72","parentkey":"VerticalLayout_1728201086bd15b502ddf5ef2dc2bb74"},
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/a96322da6ff86340da9a23bc2fbb59a6","selfkey":"ImageArea_a1c9d8c1b7f12d42728f50392161e125","parentkey":"VerticalGrid_12c1169a1b3e062ec59c9729590a3d72"}
    ),
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"灵活易安装"},{"insert":"\n","attributes":{"align":"center","header":3}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"像搭积木一样简单","attributes":{"color":"#ff9900","bold":true}},{"insert":"\n","attributes":{"align":"center","header":3}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"100%纯天然高端原木，清新自然，不伤身。同时拥有很可靠的坚硬度，使用寿命长达100年！"},{"insert":"\n","attributes":{"align":"center"}}],"readOnly":false,"selfkey":"TextArea_a688aba0f2266d34f86367ce7d2593c6","parentkey":"VerticalGrid_12c1169a1b3e062ec59c9729590a3d72"}
    )
    ),
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_0c3e620a7e540e49bb6a247fc4926dcd","parentkey":"VerticalLayout_1728201086bd15b502ddf5ef2dc2bb74"},
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/15671088902597f03ce5934953d55470","selfkey":"ImageArea_4c36cf96784db215621041b8dcda1161","parentkey":"VerticalGrid_0c3e620a7e540e49bb6a247fc4926dcd"}
    ),
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"北欧极简设计风"},{"insert":"\n","attributes":{"align":"center","header":3}},{"insert":"\n","attributes":{"align":"center","header":6}},{"insert":"引领新的家装潮流","attributes":{"color":"#ff9900","bold":true}},{"insert":"\n","attributes":{"align":"center","header":3}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"我们专业的设计师深得设计理念，将极简精神融入产品中，为你的家增添时代感。"},{"insert":"\n","attributes":{"align":"center"}}],"readOnly":false,"selfkey":"TextArea_4582aea6f2a9748eeda4d7e77f5ca60e","parentkey":"VerticalGrid_0c3e620a7e540e49bb6a247fc4926dcd"}
    )
    )
    )
    ),
React.createElement(
        "div",
        {"style":{},"id":"11260632","selfkey":"div_033965c3be5f0231c1ab11c1440f7d27","parentkey":"Root_e9a3766e1f73550c0e0add5392bea0ea"},
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"white","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"id":"VerticalLayout_cc73ac8969b32551e216c9276e46f23b","flex":[12],"selfkey":"VerticalLayout_645164e62abd55723f48006917872c3b","parentkey":"div_033965c3be5f0231c1ab11c1440f7d27"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_ae5fa8a6c98bd331e3d9fe1cbe114ce3","parentkey":"VerticalLayout_645164e62abd55723f48006917872c3b"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"家具展示","attributes":{"size":"large","bold":true}},{"insert":"\n","attributes":{"align":"center","header":2}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"各个角度，艺术呈现","attributes":{"color":"#ffc266"}},{"insert":"\n","attributes":{"align":"center","header":3}}],"readOnly":false,"selfkey":"TextArea_e2056eb7e00cb5d2f47eb55c7224d4f6","parentkey":"VerticalGrid_ae5fa8a6c98bd331e3d9fe1cbe114ce3"}
    )
    )
    ),
React.createElement(
        PreviewPhotoGallery,
        {"backgroundInfo":{"background":"white","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"imgContainerMargin":5,"intensity":4,"galleryWidth":72,"id":"PhotoGallery_c9d2a355dcd85e47cb2cd5d17cf171f2","selfkey":"PhotoGallery_e01a187e5d67089934df904dd3a2ec23","parentkey":"div_033965c3be5f0231c1ab11c1440f7d27"},
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/e27abd953177fbf27ebfad403f9fffb6","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_3af19220071c259aeeb3794140fefff0","parentkey":"PhotoGallery_e01a187e5d67089934df904dd3a2ec23"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/2156d4338c4c758b73c1a9d79289b2d0","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_c0c956481c210459d885c804e898c170","parentkey":"PhotoGallery_e01a187e5d67089934df904dd3a2ec23"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/4fb134a179cf85076c365e4b5a37247c","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_ec9c751c703d1df9b3e7648e162f7dfe","parentkey":"PhotoGallery_e01a187e5d67089934df904dd3a2ec23"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/f2fbb887e763ab86a774611144a1ac5a","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_7647f53e1ff39e66c6a7ab312439fcdc","parentkey":"PhotoGallery_e01a187e5d67089934df904dd3a2ec23"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/0572b493c77226fa00d5c8c860ae7a6b","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_12964c7b16c46b5064724c1eca34c80b","parentkey":"PhotoGallery_e01a187e5d67089934df904dd3a2ec23"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/3f3caae8ef2388500705042c027b561a","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_49dd7680a74e347323f329014ce57d1f","parentkey":"PhotoGallery_e01a187e5d67089934df904dd3a2ec23"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/28f1572f1bd1a32adfca33ab3cf3d476","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_7ba4792a387cbfb3f0324d62ba2ed3c6","parentkey":"PhotoGallery_e01a187e5d67089934df904dd3a2ec23"}
    ),
React.createElement(
        PreviewImageArea,
        {"alt":"initial","src":"http://blog-src.b0.upaiyun.com/taohe/dev/editPage/administrator/1/temporary/layout/331473f9e4d44c1facf3d93d51c390c2","galleryStyle":{"type":"verticalGallery","width":1,"height":1},"selfkey":"ImageArea_30b5b052f023eced69dc9d4334568527","parentkey":"PhotoGallery_e01a187e5d67089934df904dd3a2ec23"}
    )
    )
    ),
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"white","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"id":"VerticalLayout_05ed66094b9cf867440e6adc5ed09e2c","flex":[12],"selfkey":"VerticalLayout_c81644d88eaf9664e6cbee54075ce39e","parentkey":"Root_e9a3766e1f73550c0e0add5392bea0ea"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_a96f33783e334b172ba6672fd3bcb750","parentkey":"VerticalLayout_c81644d88eaf9664e6cbee54075ce39e"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"常见问题","attributes":{"color":"#ff9900","size":"large","bold":true}},{"insert":"\n","attributes":{"align":"center","header":2}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"关于桃核家具的详细说明","attributes":{"color":"#bbbbbb","bold":true}},{"insert":"\n\n","attributes":{"align":"center","header":3}},{"insert":"出售的家具售后服务是怎么样的？"},{"insert":"\n","attributes":{"indent":1,"header":3}},{"insert":"\n","attributes":{"indent":1}},{"insert":"在出售后的30天内，可自由更换同款的其他规格、款式设计的产品。"},{"insert":"\n","attributes":{"indent":1}},{"insert":"此外，在使用的2年内，出现产品质量性的问题，都可以享受全额退款服务！"},{"insert":"\n\n","attributes":{"indent":1}},{"insert":"是否提供定制化的服务？"},{"insert":"\n","attributes":{"indent":1,"header":3}},{"insert":"\n","attributes":{"indent":1}},{"insert":"我们提供定制化的需求，如果您希望更深度的定制，例如颜色、材质、规格，请在最下方联系我们，我们的设计团队会根据您的需求为你报价。期待您的来信！"},{"insert":"\n\n","attributes":{"indent":1}},{"insert":"线下配送服务"},{"insert":"\n","attributes":{"indent":1,"header":3}},{"insert":"\n","attributes":{"indent":1}},{"insert":"您可以选择自提或者标准快递服务，通常快递服务达到时间将根据您所在的位置决定。"},{"insert":"\n","attributes":{"indent":1}},{"insert":"全国购物满600元即可享受包邮服务。"},{"insert":"\n","attributes":{"indent":1}},{"insert":"\n"},{"insert":"\n\n\n","attributes":{"align":"center"}}],"readOnly":false,"selfkey":"TextArea_bf9f11dcc0556e36939308c212796aef","parentkey":"VerticalGrid_a96f33783e334b172ba6672fd3bcb750"}
    )
    )
    ),
React.createElement(
        PreviewVerticalLayout,
        {"backgroundInfo":{"background":"white","backgroundType":"pureColor","imageInfo":{},"fillType":null,"enableParallex":null},"id":"VerticalLayout_c265ed96dd414c985e4f5c3f00002e4c","flex":[12],"selfkey":"VerticalLayout_6b57f3ac83694c6d15ddb93b665985b8","parentkey":"Root_e9a3766e1f73550c0e0add5392bea0ea"},
React.createElement(
        PreviewVerticalGrid,
        {"selfkey":"VerticalGrid_24b26a22574948ba71a49e002774511b","parentkey":"VerticalLayout_6b57f3ac83694c6d15ddb93b665985b8"},
React.createElement(
        PreviewTextArea,
        {"deltaDeltaValue":[{"insert":"联系我们","attributes":{"size":"large","bold":true}},{"insert":"\n","attributes":{"align":"center","header":2}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"我们与您一样，爱上你的家"},{"insert":"\n","attributes":{"align":"center","header":3}},{"insert":"\n","attributes":{"align":"center"}},{"insert":"https://www.taohespace.com","attributes":{"font":"serif"}},{"insert":"\n\n","attributes":{"align":"center"}},{"insert":"\n","attributes":{"align":"center","header":1}},{"insert":"\n\n\n\n\n\n\n","attributes":{"align":"center"}},{"insert":"\n\n\n\n\n\n\n\n\n\n—————————————————————————————————————————————————————————————————————"},{"insert":"\n","attributes":{"align":"center"}},{"insert":"假装有备案的底部"},{"insert":"\n","attributes":{"align":"center"}},{"insert":"Copyright 2018 -- Joey"},{"insert":"\n","attributes":{"align":"center"}}],"readOnly":false,"selfkey":"TextArea_c60c6a415c8dd4096ea6c234140cde12","parentkey":"VerticalGrid_24b26a22574948ba71a49e002774511b"}
    )
    )
    )
    )
   );
  }
}

export default withRoot(Index);    
    
  
