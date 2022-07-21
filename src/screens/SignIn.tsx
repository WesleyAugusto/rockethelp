import{VStack, Heading} from 'native-base';
import { background } from 'native-base/lib/typescript/theme/styled-system';

export function SignIn (){
return(
    <VStack flex={1} alignItems ="center" bg="gray.600" px={8} pt={24}>
    
    <Heading color="green.400" fontSize="xl" mt="6" mb="1/2">
        acesse sua conta 
    </Heading>
    </VStack>


)

}
