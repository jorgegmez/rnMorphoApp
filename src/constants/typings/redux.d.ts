interface Action {
  type: string;
  payload: Payload;
}

type StateType<TReducerOrMap extends any> = ReturnType<TReducerOrMap>;
type reducerTypes = StateType<typeof import('@state/reducers').default>;
interface RootState extends reducerTypes {}

interface DispatchRSSA {
  <Payload, Meta>(action: RSAAAction<any, Payload, Meta>): Promise<
    RSAAResultAction<Payload, Meta>
  >;
  (action: RSAAAction): Promise<undefined>;
}

interface RSAAActionAuthorized<State = any, Payload = any, Meta = any> {
  [typeof import('@middlewares').RSAA_AUTH]: RSAACall<State, Payload, Meta>;
}

interface ReduxStateErrorModel {
  ok: boolean;
  text?: string;
}

interface ReduxStateModel {
  data: any;
  pending: boolean;
  error: ReduxStateErrorModel;
}
