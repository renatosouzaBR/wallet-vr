type StoragedCard = {
  number: string;
  cvv: string;
  name: string;
  dueDate: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      Home: undefined;
      CardRegister: undefined;
      CardRegisterSuccess: { data: StoragedCard };
      LoadingCards: undefined;
    }
  }
}