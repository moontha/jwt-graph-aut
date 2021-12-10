import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'hide-me',
        }); //depend on Strategry , this case local-strategry
    }

    async validate(payload: any){// payload is decoded from JWT
        // maybe get user from DB and then return 
        return {userId: payload.sub, username: payload.username}
    }
}
