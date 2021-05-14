import { Module } from '@nestjs/common';
import { GraphqlController } from './graphql.controller';
import { PlaceModule, PlaceService } from '@app/place';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
        PlaceModule,
    ],
    controllers: [GraphqlController],
    providers: [PlaceService],
})
export class GraphqlModule {}
