import React, {Component} from 'react';
import {Carousel, WingBlank, Flex, Grid} from 'antd-mobile';

import BottomBar from '../component/bottomTab.comp';
import CardItem from '../component/cardItem.comp';

/**
 *
 */
class EnrollList extends Component {

    constructor (props){
        super(props);
    }

    state = {
        data: ['1', '2', '3'],
        imgHeight: 120,
    };

    componentDidMount () {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }


    render () {

        const data = Array.from(new Array(3)).map((_val, i) => ({
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAgAElEQVR4Xu1dd5yTRfr/TrJ9l21J2Jalt1vaFprIT7GgHhb0LHengp5nubPgKeopHCd69op6cncKonI2LOCpWBAEKSqQ7NKWsgtbkm0k23tJ5veZ0JYt77xJ3mSzycw/7If3mWee5zvzzfRnCEQSCAgEekWACGwEAgKB3hEQBBGtQyAggYAgiGgeAgFBENEGBAKuISB6ENdwE7kCBAFBkACpaOGmawgIgriGm8gVIAgIggRIRQs3XUNAEMQ13ESuAEFAECRAKlq46RoCgiCu4SZyBQgCgiABUtHCTdcQEARxDTeRK0AQEAQJkIoWbrqGgCCIa7iJXAGCgCBIgFS0cNM1BARBXMNN5AoQBARBAqSihZuuISAI4hpuIleAICAIEiAVLdx0DQFBEJm46fUIT6Da86HCpRSYAkoGEQKdIztFE0B/ocBm2OhqY1nlAZlqhZiPIyAIwqmgicm6DLUKi0EwmwChsuqTIocSvGo0WVYB6JCVRwj5JAKCIL1US7peO1MNPApCZrpcc5Sa7ZQuzC6pZEQRqR8iIAjSQ6Vl6DV/JSBPE0IUwYdS/GTvaL8+p7ymsB+2kYA2WZEG4C8IpgEh4am6/wK4VmmfKGg1pbgq22zdrLRuoc9zCAiCnMB2yBCEaWy69QBmeAxuSm2U0luNJZVve6wMoVhRBARBjsMZlJWq+wrARYqi24MySiklhN5lMFX+y9NlCf3uIyAIApBMve5jQnC1+3DK12CnmJ9ttrwmP4fnJUdrtQMiw0k67HQSAVKoisQT0HgKRBKQaoBaQVEOYv8ZtqqthlK2vO3fKeAJkpWifRwqstjb1cx6EoBebTRXrvF22SfLy0pGhE2tmaWG6ipK6XQAI+QvTNB2UGy127E0u9T6v77ywdPlBjRBMpO0WVBjByFE5QzQoUSF6ZEDoAkKBmvnuS1NONDSBDi56EVB2yjIrGyT5UdnyndTNigrRXMDCLmOElxIQELc1AcKmktt9N7s0srv3dXla/kDliAnJuX7AAyXWykhRIUb4nS4IDoW7O/OydrRjhWV5TA0NchVd0KO1rXbMGVPqfWQkxmdEs+Ki4uhkao7QMi9BCTZqcxyhCm1AWSBwWx5RY54f5EJWIJk6TWvgKjmy62oX4WGY/7AFEevIZV+aqjDfyrL0GS3y1XNzqrsbzZZM3OBNicyyRKdkBKvD1Kp7gcltxGCKFmZ3BCiwEqjyXIrAGcAcKNEz2YNSIJkJManqYLV++VCOykiCvfpUhCskjcSK21vwxNlRbDanDllQl8ymKwL5NrEk5uYoh2lJpRteM4DIUE8eSW/24Gns02WhUrq7CtdAUmQTL12EyHkXDmgTw6PwgOJqXAWqHpbB54oL0ZBW6ucYhwydpt9lrvj+IyU2IkqVfAiSunVzs6tZBsqS9B2scFU9Z0sUR8WcrbefdgVeaZlpWgvhYp8KUc6JTgEz6QMBZuUd07quDgEp6SABAej49gxtJeU9KiuwW7DIyUFqOhol1Mck6mwtzePzy5vsMjNcFIuPTF2iCoo6B8AbpC/EuVsKfLlKWgNaUaawWotk5/L9yQDjSBsz+MwIRjBqwpGihdThmJg8OlFHhIWhoTHHkPEtGmns9vtqPngA1SvWAFqs3VTa2lvw8Olhai3d//Wkw2U0v8azda5PPtOfndMvqPUSwhwF0CkJ0hylSokR2F/0miq/JtC6vpETUARJCNFM1elUr0rB+k/ahJwcXT8KVGiViN52TKEjhnTY/ba1atR+frrPX7La23G4tJC2bNWG6Xn5Zitmzh2qjNStLcRFZ4iIHFyfJIrw/rLWHUQ4tVBjkUJXVAwamwd2N3cKJvojrIorao1W5PzAfnjTLlGekkuoAiSpddlgyCdh+2IkDA8mTL0jHmH5q67EHPddZJZzTffjLaCgh5l1tZU4v3qY7yiT34vqKCWsWYzmnvKkJGqnUQoWUEIJshVyJPTB4cgK2IA0iOiMCY0HOoe9nQogMMtTfisxors5kaeyuPfKb3NYLYulyfse1IBQ5DMlPhpRKX+SU4VPJs8FENDw06JRkydisTnnuNmrVq2DDUffdSjHGtci0oLkd/aY5vvlodS+oLRbH2w84cJCYgMCtY8CZD5Sswz1ACmRA5w9JRpYRFc/04KsPXbFyvM2NlULyfPeoPJ4vEzbnIMcUUmYAiSpde+B0Ku54E0ISwSf0sadEqMhIYi9b33EKQ7frtWKtW8/z6q/vOfXkXYZuIC8xE0s1MmvESprd2OsSc3EB27/kHkEwIM4WXlfU8OCsZ5A2Jx/oBYDFC7tgLM9nnmm/JRx51b0TqDycqGgP1yXyQgCDJuYGRCaEi4Wc5+wJKkwWf8msbfcQdir+fyytEmrS+8gLovvpBsn9/XVeONynJeGz7+ndK1BrP16ky9dgEBnpJjv5TicWERuCZO51RvIaWPDRnZ0JGXbHZk5JRYcnhyvvg9IAiSpdc8DKJ6mlcBQ0NC8WzKsFNiQQkJSH3/fZAg/q9sh8UC0w03gLby56NsqMUm7vxEQSnJIwQj+bK9S4wJi8D1sTqMCe8+jFJFRCDmN79B+PTpCBk+HB3l5WjesQOsN7RVV0sWW9zWggdKep5zdc5IYb/baKrseQXDHce8kDdACKI1gpAMHp736JLxf1Exp8QGLlmCqPPO42Vjv/Qou+8+NGdn82UBlLS3OYZaUmMOCgrCRmJOHoDsbEBCUAhuih+ISZEDutnF9nCir7gCsTffDHV0dLfvtro6mOfN45LkxoKDaIP0kJFSvG40W+6WBY6PCfk9QcYlx6eGqtXFPNyjiApvDh51avVGrdFg8Kefymqg1atWoXq5cws1H1Ydw2e13YcnjBigxB1eIIwQzInV4soYTffVKHYg68ILEX/rrQhKTJSEpdlgQNn990vK/L2sEAdbuL3hxwaTRXoJkFdBffTd7wkid3g1J0aDG+IHnqqGuLlzEXcrO3MnndrNZscvbU+bhFI52+123GXOR02nzUVHh8ErUOI7W5WaNSAO18Zpe5x8h0+aBM3ddyNk6FDZpRTNmQNbTU2v8i8dM+PnRunVLErpj0azVdbRHtmGeUnQnfrwkonuFZOVqjWwS4M8La/phyOh06556ocfIjgpiZfN8QvLfmldSVsaavGapfRUVna3xNVAKqNDw8GGiJ13/k8qZpucmvvuQ/TllzttZtmCBWjetavXfCus5fi2XnquQkENRpN1ktOF+0AGvyaI3OHViNBwPJV8evU0bOxYx645L7Xs2YPSe+7hiUl+f6jkKAodBxpd6z+CCcHv43S4NEbTa+8zYPZs6P76V5fsNM2di/bi3keob1nL8Q2HIKB0h8FsneqSAX2cya8JkqXXzQcB9wLPLZoEXNLpWEn8n/+M2N/9jls1FYsXo/FH9y4D5rU0YVFZEbesngTYqtv8gXqwQ5VSSf/2204Nq07qYocwTTfeCEjcbVluLcd3vB6EYrvRbDnbJSf7OJNfEyQzVfs/AiI5rmDnjpYPHoUoFRvBH0/6lSsRMuz0cm9PdWRvaEDRFVc4PffoSdcLFWbsaKyTtSDA8jNLr4vVYU6cFtwbKoRg2MaNgMy7LJ3tO/boo2jYJH0k7N+WUmxsqJVsxhR0i9FkPaeP27pLxfszQYIy9boaQhAphcz4sAgsThp8SoTtCwz56itug2IbgmxjUInEln3vNx/hLJYeL0mnDsbDialIDZEXJpgt5w75+mvH0Xy5ie2FWJ55Rtay9TMVJhg514wpxRqj2fIbueX7kpzfEiQ9OX66Wq3exgN7XnwCLos5fWo3LC0Nyf/ih6w69vjjaNiwgade9nc5v8SMQWlh4VjSab4kpwB2joydJ+MltvdRs2oV6tasAW2Xd4fl4dICHG1t4aim/zKYrHfyyvfF735LkMxU3SICPMED/aWUYdB3+jVmK1dsBYuXiq68kruJxtNxxnCmvQ13m/JAiar7ZJtSUEJO/X9Xm3nlhI4e7Vh06O1EgL2lBey4fu0HH8De5Fyoq9uL8xxH4aUSpXSJ0Wx9jGenL373X4LodesIwa+lQGf3Hf49qPspDv077yBkSO9nAlv27kXp3cpvDD/vOCFbx46XgG2jH99JP7m+dbqqzouKwZ91zgUmCU9Ph+6RR87YHGR7N/VffIHqlSsl9zp6w7DFbse8In4wFkrp7Uaz9U1fJADPJr8lSJZeWwdCup+x6ITIzKgY3NlDQ2ONKenll3ueh9jtKJ0/H4wkSqeC1hb8tZR/tokt7TJiD+i0sCDLFpUK4ZmZCB01CkSlQv369eioqJCVtSehI63NeKSUH7CeAucYTZYtLhfUhxn9kiATUuPGBSOI24L/pE1yHPnuKYVnZUH30ENn/OKylSvryy+j4XvPxUd7sqwYu1v4l5GujdXi2jj+EXxPtq3N9TV4XcaV82baqsk111V50hZP6fZLgmSmaG8nKtL7xYwTaC7VD0ey1B4C+8VNTwebuLMjJU27doGRxJOJrQixlSFeYsvSbw4a2ePNP15epb4vt5bhu/rej6E4yqGwGsyWvmWyGw77JUGy9NrlIOSPUriwBvbW4FFuQOeZrGzacVdxnqyYWl1PH3vGot61PlhSgKI26RWs/nwOi3nupwTR7QHBeKkGkxkeiYcTT98c9HbjkipvbY0V71fzI/+MDA3Hk04u+SrlZ7Pdjj8UHeJeE6SUPm80Wx9Sqlxv6/E7grDXaAdC28ALmvbbOB2ujtV6G29Z5bEQQXcU56FDxtXcl1OGIUXmpqGswmUK7W5uwJPl/KGgndquyTZXfSpTrc+J+R1B5AZn+FtiKiaEezxUrcsV/rqlFJs5RziY8sui4zFPk+ByOa5m7O0+Szd9zTS5PweP8z+C6LW3EULe4FX824NHI8KF80k8vUp9Z9FPFspYQmVLvW/0wWSdxfk6xLk2TIFCo8ki//KJUuApqMfvCCInanusmjUq35ugd61Xdj7L3M4P+H7fwBScFdn92qyC7eQMVU02G25mG4T868DvGkyWmzxlhzf0+h1BMvXaDYSQ86XASw+PwsLEVG/g61YZciOgsOjzDyV4z5+uF716c9JOcWu22bLCLRD6OLPfESRLry0GIZKt5dKYeNwU7/1xu7N13Wq34ZbiPLRzJuvs+Du7T9/5yL6zZTkjf/xIjIygcf18/sEw8SuCsBWsBKLjnra7TZOIWdGKhrN1pn05JbvMUopNMibrf9Ak4tde8KmV2vHHwsPcSCagyDGYLdxIMk6B0QfCfkWQTH3cBEKCdvNwfDRxEMaGS14T4anw2ne5Nw67xvTylIHsBa2XLT0/93BGmXb7E4aSSq8/jqq0375MEHVGqjbBTqmeECSpgWRQoqPo/RIdpRitUhHuXdlfD4hDpPr0DUKlQVVa39e11WhkTwBy0uzoOEQ4e4CRp7TLdxbBxNzOD45nt9P/EIJuISQJC0FKqBVAaQcFi1hRstvsCDXJd9BJW5UQ9ymCTEzWZQSp7DcDZBoIMpx978IRbI03auxyt0IJEH1Hh2uBHxS3n82Z+Ctcp4plr/0SihxKsM1mI6t2l1rkReBT3PDuCn2CII5XnwgeACEzveBz/ytCZoOTKeay//LDErlHVErpZkLxvKHE+pXLxiqUsU8Jkq7XzVYDz/DOTcn1VU4DkdXLyC3Qm3JynPO0PbJtcI8gnbqWvaD0kb4kSp8QJEurTaLhWEpA+mU4Sk+3w570y25ysgWd9IJFRGVDWM7QyUPFf4xmem9fHFnxOkGy9NrrKcHrBKTnm0pO1tuZ4ieDKPfs1vEhAsvhdbfd8kpuZuYfc9AT3skdXnmIIIyc1aC4x2i2vicXDyXkPIFlr3ZlpmpfJiB/UcLw3nWwJwNYO+numqcqz7P+nNYue4TjCYNkgef5ASyl9reM5srbvPUgj9cIkpmqeYJAtcgTdddVp+OX1JHYr2mn0PxOrKx4w05nyzjpV4/kP+EzbwjkbJlnyHNIIotDbhlwIjOl6wxm6xwA0uFUFCjLKwTxTs+hABr9REW332npkaViXjmK6SXAtqN38+7olT2p8NsTQY0V87GrIo8TJCNV9zcVwB64F0lJBGROmpUsslddbG/J8daPx5vTmSZQ+qjBbH3ckz561KOsJG0mVWMn73ZfVwf1g4fggktm44KLLkZiih6RMXEIjfTdy02erKD+qru1oQ6FW77D0R+/wekhL+uAKJrb2tHY0oaG5hYUW6twpMwCk7UaNhk3KDvjQSm1w4YpxjKra+9PyADXYwTJAoKpXpdLCEbIsMMhMiptLBYsfgxZZ/fLOMdy3QwoOcuhvdj59iuOoZlUqm9qwTfZudhbJOOc15ksOQizdYIBkBcr1Un0PUcQmQ9nOoathGDhk8/iqhtucuqIgpO+CvE+QmDvJyth2rVVVulFlip8ss2I2ibus26n9VH7IwZz5TOyCnBSyCMESdPpEsNDcQQE3NfpQ0JD8dpbq5D1f+KUiZN112/ErfkHsGO5/Ej4LW3t+GDLThRU8J+YdoBA0YQWOsITG4keIYica6/ML5VKhRUffYbxU6f3m8oWhjqPQHN1JX541rnIP2yusnqbEfuLTz9RJ1kytb9qMFfe67x10jkUJ0h6bGysakBwOQG4D1gs/MdT+M1N/IcylXZa6PMuAvXlZmxZ+qjThbbbbPjPN1twrJZ/e5ECre2kLWlvca30g4lOWqE4QTJTtHcQFfk3z46MSVPw5mdf8sTEdz9AIG/DF8hbv9YlT2oam/Dal5vAyMJL1E7/ZCyxckPO8vR0/q48QfTazYQQ7jLU5z9sRcpw348s4gyYQrY7Ak2Vx7D1lSXocDxU6lrasOcgNu/L42b2RJhTRQkyIQGRwcHaGhASJOXN+RddjOeWr+I6LAT6NwKN1grsevsVsH/dSW0dHXj58w1obOWEQKK0o7mVxOVaLIpFGFeUII77HQTcSy7/fGMFpl0i781us3E7qvIPoLm26vhLMiL1CwTYRmHDMZkTbBkerc85gC25+XxJO71MyfsjihIkK0X3CFR4SsoLtuexZX8+wqIk37ZxqNj76dsw7eyX767wK1JIOIVASVWNY8LOTXYsNJRYnubKyRRQlCCZqbq3CPAHqbJTU5Kx5qccrnmmHT9i72fvcOWEQOAg8Nya79DQLD2XocBKo8lyi1KoKEsQGVENZ86Yjhfe569o7Fj+Iqz5uUr5KfT4AQIrN2znbx5S+oPBbJWMrOkMFMoSJFW7k4BMkjLg+muvwf0vLuPauPGpBWip47xexNUiBPwJgU+3Z2N3oVnSJQq6y2iyTlbKb0UJkqXXHgQho6WMu23eXNzxxItc+79/4j60NdRx5YRA4CDwbXYuth04Iu0wpYcNZqtkG3QGMWUJkqpjywzDpQy44+Z5uO1x/rkcQRBnqjEwZL/ffQA/7ueuZB0xmCyyT5DzkBME4SEkvvsMAoIgnapC9CA+0y59xhBBEEEQ5RsjIRh69oWI0Q9BcFgEmqosKPplMxoqnLyYpLxlTmsUBBEEcbrRSGVQBYdg0k33QDsi7QwxW1sLDKuWwZq3X9HyPK1MEMTDBAkKj8D4q+YhbvAIhEREoqnKiuIdP6Jw23pP122f6B935VwMmtbzRTRbWys2Pb8QrfX9ZyldEMSDBAmJisbZdy1CeFz3p58LfvwWB9at7pNG7KlCI+J1mPmQ9C1U866t2PPJSk+ZoLheQRAPEmTyLfdBN2pcr5W2c+VSsAAD/pKSJ05B+u/vkHSHzUN+fPnv/cZlQRAPEUTOr2nl0YP45Y3n+01j4RmanD4V6b+7XRCEBxTne0DsgySOzUTm3LskoehobsJ3j93jJpy+kz1CMxAzH5Q+1CqGWPz68jpBbr7uatz9wr+4ln298DZQu50rJ0cgfugoTLvjr5KijZZybH7RK6GD5ZisiMy4q+Zi0NTeJ+mbX/obWmqqFCnLG0oCYoh10ZR0PPXxt5Lxr2pLirDtNeUiSqpDwnDBwhcQFBbeaz0W/fwD9q/9rzfq2WtlqINDwEiSknlm1JjWuhpkf/gGqo4e8potShQUEAQ5Z+wI3P/E89Bnnd0zZpRixwp21P2AEpie0pGcMQ3pv2VR87snttS5+YVF6GhtUbRMX1HGlrUTxmYgPFbjuEJQtntHv/Q1YAhyyeR0TLl1AWIHdT/XePjbz5D/A/fWrkttL2nCZLC9geCI009As8n57o+Wo0XZaDEu2ScySSMQMAS5cOKvQFQqx/h4YFo6qM2G6oLDOHZwD+o9fARCFRSE+KGjEalNACNHQ4Vy96ZFA/csAgFFEM9CKbT7IwKCIP5Yq8InxRAQBFEMSqHIHxEQBPHHWhU+KYaAIIhiUApF/oiAIIif1Gp0UipiUoYgOPL4kfrK/ANob270E+96diN1yjkYPO08x+ogi8PbUF6C3K8+Qn2ZSTG/BUEUg7JvFBG1GmmX/97RUDqntsYG7F693K9OC3f2L/13tyE5fVo30KndBsOq13HswG5FKkQQRBEY+07J6EuuxvCZs3s0wG7rwNalS9BgKes7Az1QcuK4LGTeeGevmlnopk0vLgI7DOpuEgRxF8E+zB8cEYVZi5dKnjEr32eA8b/8oHl96IbTRWdc/yewEwpSybDqn6jYn+207q4ZBEHchrDvFGiGjcHU2x+UNIAFTNj03MN9Z6QHSp4x/1FEJw+S1Hzw609wdPPXbpcuCOI2hH2ngDfUYJb5250T5hMbXjHfJXuQd19DRS4/YDmv9gRBeAj58He2enPuA5IvPzjOfvnTrUVWHVKnpB0/Cq0t2Pj0A+hoceJZ517qWRDEhwkgx7TJf/gLdKPH9yq6Y8VL/S7Ujhy/pYZZuf97H4XbN8hRw5URBOFC5NsCoQNiMPXWBYhKSDnTUEqRv/FLHHbxIUvf9hpgCxTj5tyApIlTTpnKwgqxuUfRTxsVM18QRDEo+04RUakx9P9mITEtE5G6BFQeOYiCbd+jupD/CGXfWa1MyezGZqQmwTGsaqq2OK4xKJkEQZREU+jyOwQEQfyuSoVDSiIgCKIkmkKX3yEgCOJ3VSocUhIBQRA30Gxt70BhhRVFliocq61HRXUdOihFSnwMYiMjEBMZhtiICAyMHYCE2Gg3SvL9rM2tbSivqUNpda0Dh9KqWlQ1NCIyJAQDIsIQGxkOTXQUhg7UYLBOA7Va5ftOAfjasBfbDxacsJWFdKOOv9nT4p1S/35hioX9YUEblEgtbR3INZUit7gU+eUW2I/jxU3a6ChkDNVj8sghCAsJ5sr3B4GWtnbsLy5DToEJRccqJc+EdfYnLCQImcMGYdrooY4fEl9Nh0oq8OHWXbDZugQTpNRBk04kCWyC2ClFXukx7C4w4YC5AjY3oi8Gq9XIGjEI00cPQ2yU7zaO3hpth82GvLJj2FNQgoMl7mGhVqkwbdRQzBw/CqHBQT7FkwOmcny0dWevP4AOitBTJAlMgtQ0NsF4xIRdR4q4j8m7UrtjByXj/PGjoIsZ4Ep2r+ZhPwrGI8XYuOcQGlvbFC07JiIc156diUG6eEX1uqos56gJa37OOTGYktDi6EYc3wOLIKWVNdiSm49cUxkfJFdrodOoNmNYKi6YMMYxVve11G7rwO6CEmzedxi1TZ6LAsna2Yy0ETh//Og+m5+wkcKGPQexhf+qraOaKKUnh1mBQZCiY1XYtO8QjpRbvd5Ow4KDcEnmWGQOlz7G7S3Dahub8cvhAuzKL0JLe4e3ikVCzABcc3YGEmJjvFYmK4gtMrD5RkFFpexyA4YgbBK2zrAPO/OLZIPjKcHBungHUVI0sZ4qQlJvXVMLtuzPw84jRbDLXYFQ2FI1IThn3EicO24UVGeuFilc0nF15dW1eG/zTtQ2OXf6N2AIsjOvEF/s9K2XnsamJuHC9DHQDIjySKPoqpStSG3cexA784rdWoRQ0tik+Ghcc1amx+ZorIFvP3QU63MOOP1j0Ikc/j8Heenz71HT6Nyvh5INoTddbJVn+phhOHfsCIQEe2ZpmBFjR14htubme3UoJRe/YJUKc6ZNxIQherlZZMmxBZhPt2c79rCcTYwcbHbeqXPz3zkI2+x78mP3r2YOT41BTHQYRg2JQ2urDYcLqpBXXI22dvcf5IkMDXHs42QOT+26QeVs3Z6Sr29uwaa9h5FTYEa7widgg9QEY0doMX60DsFBxzcEf9lThtx8+eP7ro6NHZSEOVMmur2HxBr3zvxCfGs84JLfx8kRQBuFjS0tePYz155kTh+jw/SMFJydmYLBKd0nlW1tHVj3YwE++OoASioaXG7MJzOy3fjLJo3H4IGuL4c2trRix+HjPUa7G/s5XZ1J0ERg1tlDkJmWgAljdGCbgV3Txl+K8Oq7BlirXVsNc3c52FLbgDU/Z8Nc6doz1I5h1XF2dHXNf3sQ5ukrX2xAZb28EDFBQSrMnJyKuXPSMHxQnKxGz4DdvNOEFZ/sRYG5VlYeKaH0oXqcO26k7PkJ28PYW1ji6C0KKqyKLV0zLC48azCumjXS0WPISS2t7Vj+8V58uI49VuT8a3wsB5u8s9MRQWq1nCKhxLJ9Lz3HyfL9myD7ikqxeptBEmw2hLr8/BG4+OyhGBAVIqtiugqxVaH/bczH8o/3oKa+1SUdpzJRipHJCZg4NAVjUhK6zVHYmn5ZVS2Ollsccwwl9zCCg1W46sKRuOHyNGhie39iTsrBHXtK8dyKnSi3uBb9MSY8DBdnpmHc4C43KU8UWt/UggPmcuwvLkUBOwbjaup+rKQnTf5NEOYx2yBim2Fdf9XSRmgwb85YzMhSbpLY3NKOd9bux+qvDyoyR2ET2WFJWiSxvQNCYKmrx5Eyi+KT7rDQIFx67jDMvWIstPGuEaNz6+rosGHlZ/vwztp9LvUmTJdeE4vhSTro42NR3dgENoxiByVLKqtlnw3rjTvRkSGYMjER328v5tHL/wnCEGgPq7+KaF4AAAn/SURBVMd+UwnKLA0YlhqHGZnJGD96IA8cl79bqpuw7L1srN/e9/svUk7ERYdi7pyxuHTmcESGK7+a9lNOKZa8thWNzd7bkORV2rDUGDz/4Ex8vjEP767N5YkHBkEmzYhEdKz3j2HvPWzBiyt3Ib+omlcRXv3OfkGvv/xXuOaS0T1OupU0prisHvc9vQEVVnlzQSXL7qqLzasevn0qWI/5xuocQRAGUFS0ClPOOf3QpicroCfdbPXw++2F+PeHOaio7NtGkjwwCr+bPQazZw7zODE6Y1FT14IFz23CoaPO700oUV/sB2HxnWfhrIzT8xpBkBPITpwcDk1C3x+5bm23YfW6Q3hnzT6wuyfeTPExYbj1mgm49LzhUKucX2FSwtb2dhtW/S8X736+Hx0d7u8hybXp/GmD8MAtkxEdFXpGFkEQAAnJQRib6f6kU25lyJGrqmnGGx/txpebj7g8gZVTDpMZGB+BKy4Ygd/OHo3wUOXnGHLt6CxXWFKLRS9vQVFpnSvZZecZEBmCRX+a1usiTEAQ5Pz0kZiZNqZH0OK1aoyfHA61um9+MXk1mVdYjedX7EDuETeWKnsshOK8aYNw5QUjkZmW2MPeF88yz39nPehLK3dh3eajihfGFhuuvWQ0fn/pGERG9L5sHxAEufGKNFwyKQ3Vlg7U19oQGqpCVKwKicnBPjGsklP767cVYM33+dhz6JhbPQqbeJ4zSY+brhqHwcn94578keJqvLF6N7YZ3X9fns2vGDFmnztM1opcQBBk3pVpuP26dDnt0Odlyo414LvthVi3uQAlFfWy7GVDqJlT9Zg2MQWZaQMRFCRvB1qWci8KHSqowoqPd2N7DiOK/B5fpQJmZOhx1UUjMXl8klMWC4I4BZdvCZdU1GHn3goUldSizNqIhsbjV2FZMIGkgVH41bB4jB+lw4jB8o7E+JZ3vVtTYW3EN1sLsHNPGfblV54xmWfHpDQxYRiojcRwfQzSRmgxZUISErSurVAKgvSXViHs7BGBDpsdxyqbUF3bgvjYMAzURCq6AicIIhqeQEACAUEQ0TwEAoIg/jNJF63ZuwiIHsS7eIvS+hkCgiD9rMKEud5FwA8Iot0HkLFSsF1zySj8Zd4k7yIrSvMLBJa+uwuffMPuCUklut9gso5TymH5OzwySszU67YTgrOkRM+bOgj/uHeGDG1CRCBwJgKLX92CH342SdOD4iej2TJdKeyUJUiq9nMCcoWUcRNG67Ds0VlK2S/0BBACdz62HnsOWXgE+cZotvxaKVgUJUhWivYFqMgCKeNCg9X4Zvk1CA7un0cslAJe6HEOAXb0/pJbPwG7giA5wLJjmbHEcpdz2nuXVpYgeu2tIORNnnEvPDQT09KTeWLiu0DgFAI/55Tigec28RGh+IvBbHmFLyhPQlGCZCTGp6mC1ft5RV927jA8fMc0npj4LhA4hcAzb/yMLzfxj9rbbB0zckqrtykFnaIEYUZl6nUVhEAyugKL9rf6lTmOy0EiCQR4CFiqmnDtvZ+jwyb9hBilaDSaLSxqoGIPtCtPkBTd60SFO3lOXzxjCBbfqdhiA6848b0fI/CPZdvx7dZCrgeU4lOj2XINV9AJAcUJkqXXTAVR/SzHhpcePs9x/FkkgUBvCOzcW477nt4oCyAb7FfmmCo/lyUsU0hxgpwYZu0mBBN4NrCrlu8+O9vl+wE8/eJ7/0agorIR8x5ah8bmdq4jlOIYMVv0BoAvzNV2WsAjBElP1cxRQ7VWjh1DU2Pw2qILEBvte0+eybFfyHgGARZ26J4nN6DAJC9+MrXT+4wl1qVKW+MRgpzoRbi76iedYSFuWOS80cNcj5SuNDBCX98hwGJxPfj8JlTVyow8T6m52Wwdngso+6KpU5eJncQrSx83HlBngxBZO4IsOvmNl6dh3pVjESI2EZ1E2z/E6xpa8faaffhsfZ5TcbgotV9tNFd+5gkUPNaDHO9FtM8SQh5yxvBEbSTumZuBaekpYLvuIvk/Aizu1pc/HMGa9XncnfJuaFC6zmC2XuoplDxKkDQgJDxVx94ycPp0JQvrP2GUDhPH6BAXHYa4mLBukfY8BYqv6E0ZGOXyAsbhwmo0Nvc84kjURDoCSTiTyi0NKHXxeYQzyqEUdY1tqKlrhbWqCduyS5HnYhxkClpN21tGZ5c3SB/QcsbRLrIeJQgra0KydnSQGj8TkL55KtYNcHwh6+Uzh+GeuVmIkBnJ/cddJry6ysh96yPjVwOx8I5pkkRhD9Ws/GwvNvxUhKJSeWGNvIYZpR02kDk5Zss6T5bpcYIw4yfqNVOCiGozALFU5UJtsuflXls8ixtxkZFj4UtbZJcQFRGMj5fO6fURojc/2o13PueeHJJdnlKCFGilFFdlmy3uP2jJMcorBGE2ZCXrZkBNvwSId1+lV6pW+ljPo3dPx6zpQyStuHr+WqefLPj1OUOx6E/dr/CwCIo3Pcx+nL3WRGQhTEHbQO1zjOaqb2RlcFPIq95nJWvGQEXWgpDRbtodcNkvOnsI/n5X70dzjLkVmP/EBqdxYb3IN8uv7Zbv5bd34dPveLf3nC7O3Qwt1E6vNZZYv3RXkdz8XiUIM4pN3MP02icIcL/cJWC5zviz3KCk6KPvv3jpqt58XLshb8gLK3bd5AoGW9///WNd8/1x4TfXHiqsTnNFn0fyUPoLBbnRaLbke0R/L0q9TpCTdrB9EkrUbxEQcUFdRo1TYKXRZLmlN9H0FF26WoVsGarOEKGUFhnN1m5jtyy97mkQPOysPuXlaR2ldJHRXPk6oNijwLLN7DOCnLCQZOo1V4KQhYIo0nVmt9umZ5dU/SQllanXFhJCBsuufdbiKH3MaLYu6ZpnQmrcuCCq3kNYcOG+SBTsaa8VaKFPG6zWsr4wgZXZN8734G2GXnsuIVgAisv6rFL6qhZ45VL7qwZz5b08seO9CN0kdyGEUuy2N7TPzKmpqelJd5Ze+3cQ0m34xbPDne+UwgLQZcTe+k9Dab3VHV1K5PUZgpx0Jk0fHR+GoCkEqikU0ANET4AkCiQDVBdg5DlCYf/IaKpcDEDWG2gnSLIEIHN6byC0llIstTd0LO2NHCfzZuo1vyGEPM4L5+RSY6RookApQNnTwkZqx9b6Uuu3+YCbD9e7ZE2PmXyOIMq5JjQJBNxHQBDEfQyFBj9GQBDEjytXuOY+AoIg7mMoNPgxAoIgfly5wjX3ERAEcR9DocGPERAE8ePKFa65j4AgiPsYCg1+jIAgiB9XrnDNfQQEQdzHUGjwYwQEQfy4coVr7iMgCOI+hkKDHyMgCOLHlStccx8BQRD3MRQa/BgBQRA/rlzhmvsICIK4j6HQ4McICIL4ceUK19xHQBDEfQyFBj9GQBDEjytXuOY+AoIg7mMoNPgxAoIgfly5wjX3Efh/rzgGueu7Us0AAAAASUVORK5CYII=',
            text: `训练营`,
        }));
        return (
            <div className="enroll-list p-b-xxl">
      	 <div className="p-t">
	      	 <WingBlank>
		        <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
		          {this.state.data.map(val => (
                      <div
                          key={val}
                          style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
                      >
		              <img
                          src={`https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png`}
                          alt=""
                          style={{width: '100%', verticalAlign: 'top'}}
                          onLoad={() => {
                              // fire window resize event to change height
                              window.dispatchEvent(new Event('resize'));
                              this.setState({imgHeight: 'auto'});
                          }}
                      />
		            </div>
                  ))}
		        </Carousel>
		      </WingBlank>
      	 </div>

         <WingBlank>
            <Grid data={data} columnNum={3}/>
         </WingBlank>

      	 <WingBlank>
      	 	<h4 className="m-b-xs">大家都在看</h4>
			<Flex>
				<Flex.Item>
                    <CardItem/>
                </Flex.Item>
      			<Flex.Item>
                    <CardItem/>
                </Flex.Item>
			</Flex>
             <div className="p-t"></div>
             <Flex>
				<Flex.Item>
                    <CardItem/>
                </Flex.Item>
      			<Flex.Item>
                    <CardItem/>
                </Flex.Item>
			</Flex>
              <div className="p-t"></div>
             <Flex>
				<Flex.Item>
                    <CardItem/>
                </Flex.Item>
      			<Flex.Item>
                    <CardItem/>
                </Flex.Item>
			</Flex>
      	 </WingBlank>

      	 <BottomBar history={this.props.history}></BottomBar>
      </div>
        );
    }
}

export default EnrollList;
