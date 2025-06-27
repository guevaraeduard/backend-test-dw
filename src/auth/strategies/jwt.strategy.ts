import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { JwtPayload } from "../interface/jwt-payload";
import { User } from "../../entities/user.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


@Injectable()
export class JwtStrategy extends (PassportStrategy(Strategy) as any) {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'SECRET_KEY',
        });
    }

    async validate(payload: JwtPayload): Promise<User> {
        const user = await this.userModel.findById(payload.id);
        if (!user) throw new UnauthorizedException('Token no valido');
        return user;
    }
}