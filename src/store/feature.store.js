import { featureService } from '../services/features-service'

export const featureStore = {
  state: {
    features: featureService.query()
  },
  getters: {
    features(state) {
      return state.features
    },
  },
}
