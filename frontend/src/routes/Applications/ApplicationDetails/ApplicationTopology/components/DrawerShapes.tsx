/* Copyright Contributors to the Open Cluster Management project */
import { useTranslation } from '../../../../../lib/acm-i18next'
export const DrawerShapes = () => {
  const { t } = useTranslation()
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="0" height="0">
      <symbol viewBox="0 0 16 16" id="drawerShapes_checkmark">
        <circle cx="8" cy="8" r="8" fill="white" fillOpacity="1" />
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.7 11.5L3.4 8.1l1.4-1.4 1.9 1.9 4.1-4.1 1.4 1.4-5.5 5.6z" />
      </symbol>
      <symbol viewBox="6 6 28 28" id="drawerShapes_failure">
        <g transform="scale(1.68)">
          <circle id="Oval" fill="#FFFFFF" cx="12" cy="12" r="9"></circle>
          <path
            d="M12,19 C15.8669355,19 19,15.8669355 19,12 C19,8.13306452 15.8669355,5 12,5 C8.13306452,5 5,8.13306452 5,12 C5,15.8669355 8.13306452,19 12,19 Z M9.68267232,15.432247 L8.56775296,14.3145161 C8.43508616,14.1818493 8.43508616,13.9673442 8.56775296,13.8346774 L10.4193548,12 L8.56775296,10.162511 C8.43508616,10.0298442 8.43508616,9.81531155 8.56775296,9.68267232 L9.68548387,8.56491384 C9.81815067,8.43224704 10.0326558,8.43224704 10.1653226,8.56491384 L12,10.4193548 L13.837489,8.56775296 C13.9701558,8.43508616 14.1846884,8.43508616 14.3173277,8.56775296 L15.4350862,9.68548387 C15.567753,9.81815067 15.567753,10.0326558 15.4350862,10.1653226 L13.5806452,12 L15.432247,13.837489 C15.5649138,13.9701558 15.5649138,14.1846884 15.432247,14.3173277 L14.3145161,15.432247 C14.1818493,15.5649138 13.9673442,15.5649138 13.8346774,15.432247 L12,13.5806452 L10.162511,15.432247 C10.0298442,15.5649138 9.81531155,15.5649138 9.68267232,15.432247 Z"
            id="times-circle"
            fill="#C9190B"
          ></path>
        </g>
      </symbol>
      <symbol viewBox="6 6 28 28" id="drawerShapes_warning">
        <g transform="scale(1.68)">
          <g id="Topology" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1474.000000, -1386.000000)">
              <g id="DeployWarning" transform="translate(1474.000000, 1386.000000)">
                <circle id="Oval" fill="#FFFFFF" cx="12" cy="12" r="9"></circle>
                <g id="Icons-/-14px-/-exclamation-triangle" transform="translate(5.000000, 5.000000)" fill="#F0AB00">
                  <path
                    d="M13.8584965,10.7072806 C13.9882079,10.9667038 14.0287429,11.2301802 13.9801011,11.4977102 C13.9314593,11.7652402 13.8017479,11.9922352 13.5909665,12.1786956 C13.3801852,12.3651561 13.1288693,12.4583861 12.8370183,12.4583861 L1.16298166,12.4583861 C0.871130747,12.4583861 0.619814803,12.3651561 0.409033462,12.1786956 C0.19825212,11.9922352 0.0685407255,11.7652402 0.0198989061,11.4977102 C-0.0287429134,11.2301802 0.0117920599,10.9667038 0.141503455,10.7072806 L5.97852179,0.589782154 C6.12444725,0.330358993 6.33117498,0.156059387 6.59870499,0.0668825945 C6.866235,-0.0222941982 7.133765,-0.0222941982 7.40129501,0.0668825945 C7.66882502,0.156059387 7.87555275,0.330358993 8.02147821,0.589782154 L13.8584965,10.7072806 Z M7,8.61568237 C6.69193502,8.61568237 6.42845862,8.72512646 6.20957043,8.94401465 C5.99068225,9.16290284 5.88123815,9.42637923 5.88123815,9.73444421 C5.88123815,10.0425092 5.99068225,10.3059856 6.20957043,10.5248738 C6.42845862,10.743762 6.69193502,10.8532061 7,10.8532061 C7.30806498,10.8532061 7.57154138,10.743762 7.79042957,10.5248738 C8.00931775,10.3059856 8.11876185,10.0425092 8.11876185,9.73444421 C8.11876185,9.42637923 8.00931775,9.16290284 7.79042957,8.94401465 C7.57154138,8.72512646 7.30806498,8.61568237 7,8.61568237 Z M5.92987997,4.60273226 L6.12444725,7.91037598 C6.12444725,7.97523187 6.15282177,8.03603414 6.20957043,8.09278281 C6.2663191,8.14953147 6.33522859,8.17790599 6.41629817,8.17790599 L7.58370183,8.17790599 C7.66477141,8.17790599 7.7336809,8.14953147 7.79042957,8.09278281 C7.84717823,8.03603414 7.87555275,7.97523187 7.87555275,7.91037598 L8.07012003,4.60273226 C8.07012003,4.50544862 8.04174551,4.42843228 7.98499684,4.37168362 C7.92824818,4.31493495 7.85933869,4.28656043 7.77826911,4.28656043 L6.22173089,4.28656043 C6.14066131,4.28656043 6.07175182,4.31493495 6.01500316,4.37168362 C5.95825449,4.42843228 5.92987997,4.50544862 5.92987997,4.60273226 Z"
                    id="exclamation-triangle"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </symbol>
      <symbol viewBox="0 0 16 16" id="drawerShapes_success">
        <circle cx="8" cy="8" r="8" fill="white" fillOpacity="1" />
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.7 11.5L3.4 8.1l1.4-1.4 1.9 1.9 4.1-4.1 1.4 1.4-5.5 5.6z" />
      </symbol>
      <symbol viewBox="6 6 28 28" id="drawerShapes_failure">
        <g transform="scale(1.68)">
          <circle id="Oval" fill="#FFFFFF" cx="12" cy="12" r="9"></circle>
          <path
            d="M12,19 C15.8669355,19 19,15.8669355 19,12 C19,8.13306452 15.8669355,5 12,5 C8.13306452,5 5,8.13306452 5,12 C5,15.8669355 8.13306452,19 12,19 Z M9.68267232,15.432247 L8.56775296,14.3145161 C8.43508616,14.1818493 8.43508616,13.9673442 8.56775296,13.8346774 L10.4193548,12 L8.56775296,10.162511 C8.43508616,10.0298442 8.43508616,9.81531155 8.56775296,9.68267232 L9.68548387,8.56491384 C9.81815067,8.43224704 10.0326558,8.43224704 10.1653226,8.56491384 L12,10.4193548 L13.837489,8.56775296 C13.9701558,8.43508616 14.1846884,8.43508616 14.3173277,8.56775296 L15.4350862,9.68548387 C15.567753,9.81815067 15.567753,10.0326558 15.4350862,10.1653226 L13.5806452,12 L15.432247,13.837489 C15.5649138,13.9701558 15.5649138,14.1846884 15.432247,14.3173277 L14.3145161,15.432247 C14.1818493,15.5649138 13.9673442,15.5649138 13.8346774,15.432247 L12,13.5806452 L10.162511,15.432247 C10.0298442,15.5649138 9.81531155,15.5649138 9.68267232,15.432247 Z"
            id="times-circle"
            fill="#C9190B"
          ></path>
        </g>
      </symbol>
      <symbol viewBox="4 4 16 16" id="drawerShapes_pending">
        <g id="Applications" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="2.1-App-9" transform="translate(-1151.000000, -1345.000000)">
            <g id="Group-3" transform="translate(72.000000, 579.000000)">
              <g id="Group-20-Copy-2" transform="translate(1079.000000, 766.000000)">
                <circle id="Oval" fill="#FFFFFF" cx="12" cy="12" r="9"></circle>
                <g id="Icons/1.-Size-md-(16px)/Status/pficon-in-progress" transform="translate(6.000000, 6.000000)">
                  <path
                    d="M5.9941349,12 C6.40860215,12 6.80938416,11.9609375 7.19648094,11.8828125 C7.58357771,11.8046875 7.96089932,11.6875 8.32844575,11.53125 C8.68817204,11.375 9.028348,11.1894531 9.34897361,10.9746094 C9.66959922,10.7597656 9.96285435,10.515625 10.228739,10.2421875 C10.5024438,9.96875 10.7468231,9.67382812 10.9618768,9.35742188 C11.1769306,9.04101562 11.3626588,8.69921875 11.5190616,8.33203125 C11.6832845,7.97265625 11.8044966,7.59765625 11.8826979,7.20703125 C11.9608993,6.81640625 12,6.4140625 12,6 C12,5.5859375 11.9608993,5.18554688 11.8826979,4.79882812 C11.8044966,4.41210938 11.6832845,4.03515625 11.5190616,3.66796875 C11.3626588,3.30859375 11.1769306,2.96875 10.9618768,2.6484375 C10.7468231,2.328125 10.5024438,2.03515625 10.228739,1.76953125 C9.96285435,1.49609375 9.66959922,1.25195312 9.34897361,1.03710938 C9.028348,0.822265625 8.68817204,0.63671875 8.32844575,0.48046875 C7.96089932,0.31640625 7.58357771,0.1953125 7.19648094,0.1171875 C6.80938416,0.0390625 6.40860215,0 5.9941349,0 L5.9941349,1.6171875 C6.2913001,1.625 6.58064516,1.65625 6.86217009,1.7109375 C7.14369501,1.765625 7.4173998,1.8515625 7.68328446,1.96875 C7.94916911,2.0859375 8.19745846,2.22265625 8.42815249,2.37890625 C8.65884653,2.53515625 8.87585533,2.71484375 9.07917889,2.91796875 C9.28250244,3.12109375 9.46236559,3.33789062 9.61876833,3.56835938 C9.77517107,3.79882812 9.91202346,4.046875 10.0293255,4.3125 C10.1466276,4.5859375 10.2346041,4.86523438 10.2932551,5.15039062 C10.3519062,5.43554688 10.3812317,5.7265625 10.3812317,6.0234375 C10.3812317,6.328125 10.3519062,6.62304688 10.2932551,6.90820312 C10.2346041,7.19335938 10.1466276,7.47265625 10.0293255,7.74609375 C9.91202346,8.01171875 9.77517107,8.26171875 9.61876833,8.49609375 C9.46236559,8.73046875 9.28250244,8.9453125 9.07917889,9.140625 C8.87585533,9.34375 8.65884653,9.5234375 8.42815249,9.6796875 C8.19745846,9.8359375 7.94916911,9.97265625 7.68328446,10.0898438 C7.40957967,10.2070312 7.13000978,10.2929688 6.84457478,10.3476562 C6.55913978,10.4023438 6.26783969,10.4296875 5.97067449,10.4296875 C5.71260997,10.4296875 5.46432063,10.4101562 5.22580645,10.3710938 C4.98729228,10.3320312 4.75464321,10.2734375 4.52785924,10.1953125 L3.74193548,11.5664062 C4.09384164,11.7148438 4.45747801,11.8242188 4.83284457,11.8945312 C5.20821114,11.9648438 5.59530792,12 5.9941349,12 Z M0,5.578125 L1.59530792,5.47265625 C1.61876833,5.26953125 1.65591398,5.07226563 1.70674487,4.88085938 C1.75757576,4.68945313 1.82209189,4.50390625 1.90029326,4.32421875 C1.92375367,4.26953125 1.94721408,4.21679688 1.97067449,4.16601563 C1.9941349,4.11523438 2.02150538,4.0625 2.05278592,4.0078125 L0.633431085,3.3046875 C0.602150538,3.359375 0.572825024,3.41796875 0.545454545,3.48046875 C0.518084066,3.54296875 0.492668622,3.60546875 0.469208211,3.66796875 C0.336265885,3.97265625 0.230694037,4.28320313 0.152492669,4.59960938 C0.0742913001,4.91601563 0.0234604106,5.2421875 0,5.578125 Z M2.26392962,10.6992188 L3.04985337,9.328125 C3.01857283,9.296875 2.98533724,9.26757813 2.95014663,9.24023438 C2.91495601,9.21289063 2.88172043,9.18359375 2.85043988,9.15234375 C2.65493646,8.94921875 2.47702835,8.73046875 2.31671554,8.49609375 C2.15640274,8.26171875 2.01759531,8.01171875 1.90029326,7.74609375 C1.86119257,7.65234375 1.82600196,7.55859375 1.79472141,7.46484375 C1.76344086,7.37109375 1.73607038,7.27734375 1.71260997,7.18359375 L0.129032258,7.2890625 C0.168132942,7.46875 0.215053763,7.64648438 0.269794721,7.82226563 C0.324535679,7.99804688 0.391006843,8.16796875 0.469208211,8.33203125 C0.625610948,8.69921875 0.811339198,9.04101563 1.02639296,9.35742188 C1.24144673,9.67382813 1.485826,9.96875 1.75953079,10.2421875 C1.83773216,10.328125 1.91788856,10.4082031 2,10.4824219 C2.08211144,10.5566406 2.17008798,10.6289063 2.26392962,10.6992188 Z"
                    id="pficon-in-progress"
                    fill="#151515"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </symbol>
      <symbol viewBox="0 0 16 16" id="drawerShapes_carbonLaunch">
        <g id="launch" fill="#3D70B2">
          <path id="Combined-Shape" d="M14.3,1h-3.8V0H16v5.5h-1V1.7L9.7,7L9,6.3L14.3,1z" />
          <path id="Combined-Shape_1_" d="M14.3,1h-3.8V0H16v5.5h-1V1.7L9.7,7L9,6.3L14.3,1z" />
          <path id="window" d="M13,9h1v6c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h7v1H1v12h12V9z" />
        </g>
      </symbol>
      <symbol viewBox="0 0 14 12" id="drawerShapes_sidecar">
        <g id="Topology" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="App-Topology-6" transform="translate(-376.000000, -571.000000)" fill="#3D70B2">
            <g id="Organization-/-File-/-notebook-/-16" transform="translate(375.000000, 569.000000)">
              <path
                d="M9.5,5 L13,5 L13,6 L9.5,6 L9.5,5 Z M9.5,7.5 L13,7.5 L13,8.5 L9.5,8.5 L9.5,7.5 Z M9.5,10 L13,10 L13,11 L9.5,11 L9.5,10 Z M14,2.5 L2,2.5 C1.44794374,2.50055123 1.00055123,2.94794374 1,3.5 L1,12.5 C1.00055123,13.0520563 1.44794374,13.4994488 2,13.5 L14,13.5 C14.5519422,13.4991739 14.9991739,13.0519422 15,12.5 L15,3.5 C14.9994488,2.94794374 14.5520563,2.50055123 14,2.5 Z M2,3.5 L7.5,3.5 L7.5,12.5 L2,12.5 L2,3.5 Z M8.5,12.5 L8.5,3.5 L14,3.5 L14.001,12.5 L8.5,12.5 Z"
                id="Fill"
              ></path>
            </g>
          </g>
        </g>
      </symbol>
      <svg viewBox="0 0 1024 1024" id="drawerShapes_open-new-tab">
        <title>open-new-tab</title>
        <g id="open-new-tab" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            d="M576,320 L896,320 L896,192 L576,192 L576,320 Z M128,320 L448,320 L448,192 L128,192 L128,320 Z M930,64 L896,64 L128,64 L94,64 C42.085,64 0,106.085 0,158 L0,192 L0,832 L0,866 C0,917.915 42.085,960 94,960 L128,960 L488,960 C501.255,960 512,949.255 512,936 L512,856 C512,842.745 501.255,832 488,832 L140,832 C133.373,832 128,826.627 128,820 L128,448 L896,448 L896,552 C896,565.255 906.745,576 920,576 L1000,576 C1013.255,576 1024,565.255 1024,552 L1024,158 C1024,106.085 981.915,64 930,64 L930,64 Z"
            id="Fill-1"
            fill="#0066CC"
          ></path>
          <path
            d="M968,784 L848,784 L848,664 C848,650.7 837.3,640 824,640 L776,640 C762.7,640 752,650.7 752,664 L752,784 L632,784 C618.7,784 608,794.7 608,808 L608,856 C608,869.3 618.7,880 632,880 L752,880 L752,1000 C752,1013.3 762.7,1024 776,1024 L824,1024 C837.3,1024 848,1013.3 848,1000 L848,880 L968,880 C981.3,880 992,869.3 992,856 L992,808 C992,794.7 981.3,784 968,784"
            id="Fill-3"
            fill="#0066CC"
          ></path>
        </g>
      </svg>
      <symbol viewBox="0 0 350 120" id="drawerShapes_legend">
        <g id="Product-Topology-Legend-Template" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Basic-Node-B-Copy-9" transform="translate(197.000000, 7.000000)">
            <circle
              id="Oval"
              stroke="#3E8635"
              className="pf-topology__node__background"
              fill-rule="nonzero"
              cx="54"
              cy="24"
              r="23.5"
            ></circle>
            <g id="Success" transform="translate(28.000000, 0.000000)">
              <rect id="Rectangle" fill="#FFFFFF" x="2.7500006" y="2.74996722" width="10" height="11"></rect>
              <path
                d="M7.74998152,15.499963 C12.0301837,15.499963 15.499963,12.0301837 15.499963,7.74998152 C15.499963,3.46977933 12.0301837,0 7.74998152,0 C3.46977933,0 0,3.46977933 0,7.74998152 C0,12.0301837 3.46977933,15.499963 7.74998152,15.499963 Z M6.14640869,11.8535179 L2.89641643,8.60352563 C2.70119595,8.40827463 2.70119595,8.09165551 2.89641643,7.89640451 L3.60353755,7.18931391 C3.79878855,6.99406291 4.11540767,6.99406291 4.31065867,7.18931391 L6.4999845,9.37867027 L11.1893044,4.68935039 C11.3845859,4.49406888 11.701205,4.49406888 11.8964255,4.68935039 L12.6035466,5.39644099 C12.7987671,5.59169199 12.7987671,5.90831111 12.6035466,6.10356211 L6.85356032,11.8535484 C6.6582788,12.0487689 6.3416902,12.0487689 6.14640869,11.8535179 Z"
                id=""
                fill="#3E8635"
                fill-rule="nonzero"
              ></path>
            </g>
            <path
              d="M54.0263415,34 C54.1434146,34 54.257561,33.9853659 54.3687805,33.9560976 C54.48,33.9268293 54.582439,33.8829268 54.6760976,33.8243902 L62.28,29.662439 C62.3853659,29.6039024 62.4819512,29.5336585 62.5697561,29.4517073 C62.657561,29.3697561 62.7365854,29.2702439 62.8068293,29.1531707 C62.8770732,29.0478049 62.9268293,28.9365854 62.9560976,28.8195122 C62.9853659,28.702439 63,28.5795122 63,28.4507317 L63,20.1443902 C63,20.0039024 62.9765854,19.8692683 62.9297561,19.7404878 C62.8829268,19.6117073 62.8185366,19.4829268 62.7365854,19.3541463 C62.6546341,19.2370732 62.5609756,19.137561 62.4556098,19.0556098 C62.3502439,18.9736585 62.2273171,18.9034146 62.0868293,18.844878 L54.5004878,16.0878049 C54.4185366,16.0643902 54.3365854,16.0439024 54.2546341,16.0263415 C54.1726829,16.0087805 54.0965854,16 54.0263415,16 L53.9736585,16 L53.9736585,16 C53.8917073,16 53.8097561,16.0087805 53.7278049,16.0263415 C53.6458537,16.0439024 53.5697561,16.0643902 53.4995122,16.0878049 L45.9131707,18.862439 C45.7726829,18.9092683 45.6468293,18.9736585 45.5356098,19.0556098 C45.4243902,19.137561 45.3278049,19.2429268 45.2458537,19.3717073 C45.1639024,19.4887805 45.102439,19.6117073 45.0614634,19.7404878 C45.0204878,19.8692683 45,20.0097561 45,20.1619512 L45,28.4507317 C45,28.5795122 45.0146341,28.702439 45.0439024,28.8195122 C45.0731707,28.9365854 45.1229268,29.0478049 45.1931707,29.1531707 C45.2517073,29.2702439 45.324878,29.3697561 45.4126829,29.4517073 C45.5004878,29.5336585 45.6029268,29.6039024 45.72,29.662439 L53.3239024,33.8243902 C53.417561,33.8829268 53.52,33.9268293 53.6312195,33.9560976 C53.742439,33.9853659 53.8565854,34 53.9736585,34 L54.0263415,34 L54.0263415,34 Z M53.9912195,27.4321951 L46.2468293,23.9726829 L46.2468293,22.5326829 L53.9912195,25.7112195 L61.7004878,22.48 L61.7004878,23.9726829 L53.9912195,27.4321951 Z M53.9912195,31.857561 L46.2468293,27.6780488 L46.2468293,26.3785366 L53.9912195,30.0663415 L61.7004878,26.3785366 L61.7004878,27.6780488 L53.9912195,31.857561 Z"
              id=""
              className="pf-topology__node__icon"
              fill-rule="nonzero"
            ></path>
            <g id="Node-Title" transform="translate(0.000000, 53.000000)" className="pf-topology__node__label">
              <rect
                id="Rectangle"
                stroke="#3E8635"
                fill-rule="nonzero"
                x="0.5"
                y="0.5"
                width="106"
                height="45"
                rx="3"
              ></rect>
              <g id="Group-4" transform="translate(1.000000, 25.000000)">
                <rect id="Rectangle" x="0" y="0" width="105" height="1" fill="#6A6E73" stroke="none"></rect>
              </g>
              <text font-family="RedHatText" font-size="14" font-weight="normal">
                <tspan x="21" y="18">
                  {t('Cluster')}
                </tspan>
              </text>
              <text id="Cluster" font-family="RedHatText" font-size="12" font-weight="normal" line-spacing="20">
                <tspan x="21" y="38">
                  {t('Node Title')}
                </tspan>
              </text>
            </g>
          </g>
          <text
            id="Resource-deploy-stat-Copy"
            font-family="RedHatText"
            font-size="14"
            font-weight="normal"
            fill="#6A6E73"
          >
            <tspan x="0" y="14">
              {t('Resource deploy status')}
            </tspan>
          </text>
          <text id="Resource-icon-Copy" font-family="RedHatText" font-size="14" font-weight="normal" fill="#6A6E73">
            <tspan x="0" y="48">
              {t('Resource icon')}
            </tspan>
          </text>
          <text id="Resource-name-Copy" font-family="RedHatText" font-size="14" font-weight="normal" fill="#6A6E73">
            <tspan x="0" y="82">
              {t('Resource type')}
            </tspan>
          </text>
          <text id="Resource-type-Copy-2" font-family="RedHatText" font-size="14" font-weight="normal" fill="#6A6E73">
            <tspan x="0" y="116">
              {t('Resource name')}
            </tspan>
          </text>
          <line
            x1="152.484375"
            y1="10.5"
            x2="218"
            y2="10.5"
            id="Path-2-Copy-4"
            stroke="#B8BBBE"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="2,2"
          ></line>
          <circle id="Oval-Copy-4" fill="#B8BBBE" cx="211.5" cy="73" r="2.5"></circle>
          <circle id="Oval-Copy-5" fill="#B8BBBE" cx="211.5" cy="96" r="2.5"></circle>
          <circle id="Oval-Copy-6" fill="#B8BBBE" cx="222.5" cy="10.5" r="2.5"></circle>
          <circle id="Oval-Copy-7" fill="#B8BBBE" cx="236.5" cy="32" r="2.5"></circle>
          <path
            d="M94.0472005,43 L152.484375,43 L152.484375,31.7499672 L235.108073,31.7499672"
            id="Path-2-Copy-7"
            stroke="#B8BBBE"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="2,2"
          ></path>
          <path
            d="M103.123047,78.5950521 L152.484375,78.5950521 L152.484375,73 L209.45638,73"
            id="Path-3-Copy-2"
            stroke="#B8BBBE"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="2,2"
          ></path>
          <path
            d="M103.123047,111.595052 L152.484375,111.595052 L152.484375,96 L209.47526,96"
            id="Path-3-Copy-3"
            stroke="#B8BBBE"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="2,2"
          ></path>
        </g>
      </symbol>
      <symbol viewBox="0 0 350 120" id="drawerShapes_legend2">
        <g id="Legend" transform="translate(-340.000000, 0)">
          <g id="Product-Topology-Legend-Template" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Group-3-Copy" transform="translate(363.000000, 8.000000)">
              <g id="Node-Group-Collapsed-Copy-7" fill-rule="nonzero">
                <g id="Basic-Node">
                  <path
                    d="M40,0 C53.254834,0 64,10.745166 64,24 C64,37.254834 53.254834,48 40,48 C38.6370953,48 37.3007244,47.8863955 35.9998401,47.6681394 C47.3509346,45.7637611 56,35.8919293 56,24 C56,12.1080707 47.3509346,2.23623887 36.0001599,0.331860595 C37.3007244,0.113604496 38.6370953,0 40,0 Z"
                    id="Combined-Shape-Copy"
                    stroke="#D1D1D1"
                    className="pf-topology__node__background"
                  ></path>
                  <path
                    d="M32,0 C45.254834,0 56,10.745166 56,24 C56,37.254834 45.254834,48 32,48 C30.637347,48 29.3012179,47.8864375 28.0005607,47.6682603 C39.3510786,45.7635968 48,35.8918303 48,24 C48,12.1081697 39.3510786,2.23640323 28.0004434,0.331908158 C29.3012179,0.113562546 30.637347,0 32,0 Z"
                    id="Combined-Shape"
                    stroke="#D1D1D1"
                    className="pf-topology__node__background"
                  ></path>
                  <circle
                    id="Oval"
                    stroke="#D1D1D1"
                    className="pf-topology__node__background"
                    cx="24"
                    cy="24"
                    r="24"
                  ></circle>
                  <path
                    d="M24.0527344,34.3007812 C24.1699219,34.3007812 24.2841797,34.2861328 24.3955078,34.2568359 C24.5068359,34.2275391 24.609375,34.1835938 24.703125,34.125 L32.3144531,29.9589844 C32.4199219,29.9003906 32.5166016,29.8300781 32.6044922,29.7480469 C32.6923828,29.6660156 32.7714844,29.5664062 32.8417969,29.4492188 C32.9121094,29.34375 32.9619141,29.2324219 32.9912109,29.1152344 C33.0205078,28.9980469 33.0351562,28.875 33.0351562,28.7460938 L33.0351562,20.4316406 C33.0351562,20.2910156 33.0117188,20.15625 32.9648438,20.0273438 C32.9179688,19.8984375 32.8535156,19.7695312 32.7714844,19.640625 C32.6894531,19.5234375 32.5957031,19.4238281 32.4902344,19.3417969 C32.3847656,19.2597656 32.2617188,19.1894531 32.1210938,19.1308594 L24.5273438,16.3710938 C24.4453125,16.3476562 24.3632812,16.3271484 24.28125,16.3095703 C24.1992188,16.2919922 24.1230469,16.2832031 24.0527344,16.2832031 L24,16.2832031 L24,16.2832031 C23.9179688,16.2832031 23.8359375,16.2919922 23.7539062,16.3095703 C23.671875,16.3271484 23.5957031,16.3476562 23.5253906,16.3710938 L15.9316406,19.1484375 C15.7910156,19.1953125 15.6650391,19.2597656 15.5537109,19.3417969 C15.4423828,19.4238281 15.3457031,19.5292969 15.2636719,19.6582031 C15.1816406,19.7753906 15.1201172,19.8984375 15.0791016,20.0273438 C15.0380859,20.15625 15.0175781,20.296875 15.0175781,20.4492188 L15.0175781,28.7460938 C15.0175781,28.875 15.0322266,28.9980469 15.0615234,29.1152344 C15.0908203,29.2324219 15.140625,29.34375 15.2109375,29.4492188 C15.2695312,29.5664062 15.3427734,29.6660156 15.4306641,29.7480469 C15.5185547,29.8300781 15.6210938,29.9003906 15.7382812,29.9589844 L23.3496094,34.125 C23.4433594,34.1835938 23.5458984,34.2275391 23.6572266,34.2568359 C23.7685547,34.2861328 23.8828125,34.3007812 24,34.3007812 L24.0527344,34.3007812 L24.0527344,34.3007812 Z M24.0175781,27.7265625 L16.265625,24.2636719 L16.265625,22.8222656 L24.0175781,26.0039062 L31.734375,22.7695312 L31.734375,24.2636719 L24.0175781,27.7265625 Z M24.0175781,32.15625 L16.265625,27.9726562 L16.265625,26.671875 L24.0175781,30.3632812 L31.734375,26.671875 L31.734375,27.9726562 L24.0175781,32.15625 Z"
                    id=""
                    className="pf-topology__node__icon"
                  ></path>
                </g>
              </g>
              <g id="Node-Group-Badge-Copy-6">
                <rect
                  id="Rectangle"
                  stroke="#D1D1D1"
                  fill="#FFFFFF"
                  fill-rule="nonzero"
                  x="41"
                  y="15"
                  width="31"
                  height="18"
                  rx="9"
                ></rect>
                <path
                  d="M40,0 C50.0721415,0 58.6951397,6.20451986 62.2554582,15.0000231 L63,15 C67.9705627,15 72,19.0294373 72,24 C72,28.9705627 67.9705627,33 63,33 L62.255052,33.0009805 C58.6944838,41.7959521 50.0717584,48 40,48 C38.6370953,48 37.3007244,47.8863955 35.9998401,47.6681394 L36.1983656,47.6340281 C34.8351381,47.8745462 33.4322197,48 32,48 C30.637347,48 29.3012179,47.8864375 28.0005607,47.6682603 C28.1866512,47.6370335 28.3720156,47.6036653 28.5566276,47.5681817 C27.0810963,47.8515658 25.5578825,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C25.4364054,0 26.843338,0.126188164 28.2103169,0.368083603 L28.0004434,0.331908158 C29.3012179,0.113562546 30.637347,0 32,0 C33.4364054,0 34.843338,0.126188164 36.2103169,0.368083603 L36.0001599,0.331860595 C37.3007244,0.113604496 38.6370953,0 40,0 Z"
                  id="Combined-Shape"
                  stroke="#3E8635"
                  fill-rule="nonzero"
                ></path>
                <text
                  id="64"
                  font-family="RedHatText"
                  font-size="12"
                  font-weight="normal"
                  line-spacing="18"
                  fill="#292E34"
                >
                  <tspan x="49.078" y="27">
                    64
                  </tspan>
                </text>
              </g>
            </g>
            <g id="Success-Copy-2" transform="translate(361.000000, 7.000000)">
              <rect id="Rectangle" fill="#FFFFFF" x="2.7500006" y="2.74996722" width="10" height="11"></rect>
              <path
                d="M7.74998152,15.499963 C12.0301837,15.499963 15.499963,12.0301837 15.499963,7.74998152 C15.499963,3.46977933 12.0301837,0 7.74998152,0 C3.46977933,0 0,3.46977933 0,7.74998152 C0,12.0301837 3.46977933,15.499963 7.74998152,15.499963 Z M6.14640869,11.8535179 L2.89641643,8.60352563 C2.70119595,8.40827463 2.70119595,8.09165551 2.89641643,7.89640451 L3.60353755,7.18931391 C3.79878855,6.99406291 4.11540767,6.99406291 4.31065867,7.18931391 L6.4999845,9.37867027 L11.1893044,4.68935039 C11.3845859,4.49406888 11.701205,4.49406888 11.8964255,4.68935039 L12.6035466,5.39644099 C12.7987671,5.59169199 12.7987671,5.90831111 12.6035466,6.10356211 L6.85356032,11.8535484 C6.6582788,12.0487689 6.3416902,12.0487689 6.14640869,11.8535179 Z"
                id=""
                fill="#3E8635"
                fill-rule="nonzero"
              ></path>
            </g>
            <g id="Group-2-Copy" className="pf-topology__node__label" transform="translate(344.000000, 60.000000)">
              <rect
                id="Rectangle"
                stroke="#3E8635"
                fill-rule="nonzero"
                x="0.5"
                y="0.5"
                width="105"
                height="25"
                rx="3"
              ></rect>
              <text id="Deployment" font-family="RedHatText" font-size="14" font-weight="normal">
                <tspan x="14.696" y="18">
                  {t('Deployment')}
                </tspan>
              </text>
            </g>
            <text
              id="Number-of-resources-Copy"
              font-family="RedHatText"
              font-size="14"
              font-weight="normal"
              fill="#6A6E73"
            >
              <tspan x="523" y="37">
                {t('Number of resources grouped')}
              </tspan>
            </text>
            <text id="Resource-type-Copy" font-family="RedHatText" font-size="14" font-weight="normal" fill="#6A6E73">
              <tspan x="523" y="78">
                {t('Resource type')}
              </tspan>
            </text>
            <line
              x1="448.484375"
              y1="31.7499672"
              x2="514"
              y2="31.7499672"
              id="Path-2-Copy-5"
              stroke="#B8BBBE"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="2,2"
            ></line>
            <line
              x1="444.5"
              y1="73.5"
              x2="514"
              y2="72.7499672"
              id="Path-2-Copy-6"
              stroke="#B8BBBE"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="2,2"
            ></line>
            <circle id="Oval-Copy-8" fill="#B8BBBE" cx="440.5" cy="73.5" r="2.5"></circle>
            <circle id="Oval-Copy-9" fill="#B8BBBE" cx="444.5" cy="31.5" r="2.5"></circle>
          </g>
        </g>
      </symbol>
    </svg>
  )
}
