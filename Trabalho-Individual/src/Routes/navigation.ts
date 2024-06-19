import { ParametrosDaRota } from "./StackRoutes";

declare global{
    namespace ReactNavigation{
        interface RootParamList extends ParametrosDaRota{}
    }
}

import { TabsParametrosDaRota } from "./BottomTabRoutes";

declare global{
    namespace ReactNavigation{
        interface RootParamList extends TabsParametrosDaRota{}
    }
}