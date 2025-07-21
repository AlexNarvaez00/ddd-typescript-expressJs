import { DeleteController } from './DeleteController'
import { GetController } from './GetController'
import { PostController } from './PostController'
import { PutController } from './PutController'

export interface ApiController
    extends GetController,
        PostController,
        PutController,
        DeleteController {}
