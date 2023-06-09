import {
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import WhoWeAre from '/images/WhoWeAre.png';
import OurHistory from '/images/OurHistory.png';
import OurPourpose from '/images/OurPourpose.png';

export default function WhoWeAreCarrousel() {
  
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <Flex
            w={"100vw"}
            h={{base: "auto", sm: "801px"}}
            backgroundColor={"#94B0ED"}
            direction={"column"}
        >
            <Flex
                transform={{base: "translateY(-30px)", sm: "translateY(-160px)"}}
                id='quem-somos'
            />
            <Flex
                w={"100%"}
                direction={"row"}
                align={"flex-start"}
                justify={"flex-start"}
                pl={{base: "16px", sm: "128px"}}
            >
                <Flex
                    h={{base: "100px", sm: "270px"}}
                    w={{base: "33%", sm: "412px"}}
                    bgColor={currentSlide !== 0 ? "#94B0ED" : "white"}
                    position="relative"
                    border="4px solid #94B0ED"
                    borderBottom="none"
                    borderRadius={"50px 50px 0px 0px"}
                    transform={{base: currentSlide !== 0 ? "translateY(0)" : "translateY(-20px)" ,sm: currentSlide !== 0 ? "translateY(0)" : "translateY(-35px)"}}
                    transition={"transform 0.3s ease-in-out, background-color 0.3s ease-in-out, padding-top 0.3s ease-in-out"}
                    onClick={() => setCurrentSlide(0)}
                    cursor="pointer"
                    direction="column"
                    pt={{base: currentSlide !== 0 ? "0px" : "0px", sm: currentSlide !== 0 ? "50px" : "85px"}}
                    pl={{base: "8px", sm: "64px"}}
                    gap="1rem"
                >
                    <Text
                        mt={{base: "12px", sm: "0"}}
                        ml={{base: "2px", sm: "0"}}
                        color={currentSlide !== 0 ? "white" : "black"}
                        transition={"color 0.3s ease-in-out"}
                        fontSize={{base: "16px", sm: "32px"}}
                        fontWeight="700"
                    >Quem Somos</Text>
                    <Text
                        display={{base: "none", sm: "block"}}
                        w="221px"
                        color={currentSlide !== 0 ? "white" : "black"}
                        transition={"color 0.3s ease-in-out"}
                    >Conheça a nossa equipe</Text>
                </Flex>
                <Flex
                    h={{base: "100px", sm: "270px"}}
                    w={{base: "33%", sm: "412px"}}
                    bgColor={currentSlide !== 1 ? "#94B0ED" : "white"}
                    position="relative"
                    border="4px solid #94B0ED"
                    borderBottom="none"
                    borderRadius={"50px 50px 0px 0px"}
                    transform={{base: currentSlide !== 1 ? "translateY(0)" : "translateY(-20px)" ,sm: currentSlide !== 1 ? "translateY(0)" : "translateY(-35px)"}}
                    transition={"transform 0.3s ease-in-out, background-color 0.3s ease-in-out, padding-top 0.3s ease-in-out"}
                    onClick={() => setCurrentSlide(1)}
                    cursor="pointer"
                    direction="column"
                    pt={{base: currentSlide !== 1 ? "0px" : "0px", sm: currentSlide !== 1 ? "50px" : "85px"}}
                    pl={{base: "8px", sm: "64px"}}
                    gap="1rem"
                >
                    <Text
                        mt={{base: "12px", sm: "0"}}
                        ml={{base: "2px", sm: "0"}}
                        color={currentSlide !== 1 ? "white" : "black"}
                        transition={"color 0.3s ease-in-out"}
                        fontSize={{base: "16px", sm: "32px"}}
                        fontWeight="700"
                    >Nossa História</Text>
                    <Text
                        display={{base: "none", sm: "block"}}
                        w="221px"
                        color={currentSlide !== 1 ? "white" : "black"}
                        transition={"color 0.3s ease-in-out"}
                    >Veja de onde viemos e para onde queremos ir</Text>
                </Flex>
                <Flex
                    h={{base: "100px", sm: "270px"}}
                    w={{base: "33%", sm: "412px"}}
                    bgColor={currentSlide !== 2 ? "#94B0ED" : "white"}
                    position="relative"
                    border="4px solid #94B0ED"
                    borderBottom="none"
                    borderRadius={"50px 50px 0px 0px"}
                    transform={{base: currentSlide !== 2 ? "translateY(0)" : "translateY(-20px)" ,sm: currentSlide !== 2 ? "translateY(0)" : "translateY(-35px)"}}
                    transition={"transform 0.3s ease-in-out, background-color 0.3s ease-in-out, padding-top 0.3s ease-in-out"}
                    onClick={() => setCurrentSlide(2)}
                    cursor="pointer"
                    direction="column"
                    pt={{base: currentSlide !== 2 ? "0px" : "0px", sm: currentSlide !== 2 ? "50px" : "85px"}}
                    pl={{base: "8px", sm: "64px"}}
                    gap="1rem"
                >
                    <Text
                        mt={{base: "12px", sm: "0"}}
                        ml={{base: "2px", sm: "0"}}
                        color={currentSlide !== 2 ? "white" : "black"}
                        transition={"color 0.3s ease-in-out"}
                        fontSize={{base: "16px", sm: "32px"}}
                        fontWeight="700"
                    >Nosso propósito</Text>
                    <Text
                        display={{base: "none", sm: "block"}}
                        w="221px"
                        color={currentSlide !== 2 ? "white" : "black"}
                        transition={"color 0.3s ease-in-out"}
                    >Veja o que nos motivou a criar o IAlém e o que nos move para melhora-lo</Text>
                </Flex>
            </Flex>
            <Flex
                w={"100%"}
                h={{base: "auto", sm: "500px"}}
                direction={"row"}
                bgColor="white"
                transform={"translateY(-35px)"}
                pl={{base: "0", sm: "64px"}}
            >
                {
                    currentSlide === 0 ? (
                    <Flex
                        w="100%"
                        h="100%"
                        justify={{base: "center", sm: "space-between"}}
                        align={{base: "center", sm: "center"}}
                        padding={{base: "36px 36px", sm: "0 100px"}}
                        gap="5rem"
                        display={currentSlide === 0 ? "flex" : "none"}
                    >
                        <Text
                            fontSize={{base: "24px", sm: "32px"}}
                            fontWeight={"400"}
                            w={"100%"}
                            lineHeight={"1.25"}
                            fontFamily={"'Fira Sans', sans-serif"}
                        >
                            Somos uma plataforma de ensino que auxilia, de forma amigável, no aprendizado e reforço escolar de alunos da educação básica.
                        </Text>
                        <Image
                            src={WhoWeAre}
                            display={{base: "none", sm: "block"}}
                        />
                    </Flex>
                    ) : currentSlide === 1 ? (
                    <Flex
                        w="100%"
                        h="100%"
                        justify={{base: "center", sm: "space-between"}}
                        align={{base: "center", sm: "center"}}
                        padding={{base: "36px 36px", sm: "0 100px"}}
                        gap="5rem"
                    >
                        <Image
                            src={OurHistory}
                            display={{base: "none", sm: "block"}}
                        />
                        <Text
                            fontSize={{base: "24px", sm: "32px"}}
                            fontWeight={"400"}
                            w={"100%"}
                            lineHeight={"1.25"}
                            fontFamily={"'Fira Sans', sans-serif"}
                        >
                            Surgimos a partir da participação no evento Hackatona que nos deu a oportunidade de discutir soluções para problemas atuais. Com muita dedicação, trabalho em equipe e café, muito café, desenvolvemos nossa ideia. Um grupo de 6 alunos cursando o 1º semestre de engenharia de software, cujo objetivo é facilitar a vida de outros estudantes.
                        </Text>
                    </Flex>
                    ) : (
                    <Flex
                        w="100%"
                        h="100%"
                        justify={{base: "center", sm: "space-between"}}
                        align={{base: "center", sm: "center"}}
                        padding={{base: "36px 36px", sm: "0 100px"}}
                        gap="5rem"
                    >
                        <Text
                            fontSize={{base: "24px", sm: "32px"}}
                            fontWeight={"400"}
                            w={"100%"}
                            lineHeight={"1.25"}
                            fontFamily={"'Fira Sans', sans-serif"}
                        >
                            Nosso propósito é democratizar a educação com qualidade para todos os alunos da rede básica de ensino, trazendo retornos positivos no seu desempenho escolar.
                        </Text>
                        <Image
                            src={OurPourpose}
                            display={{base: "none", sm: "block"}}
                        />
                    </Flex>
                    )
                }
            </Flex>
        </Flex>
    )
}