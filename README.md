# Tạo project lib
Tạo project & chứa lib
```
    ng new lib-angular-byn
```
Tạo lib byn-common
```
    ng generate library byn-common
```
Build lib byn-common
```
    ng build byn-common
```
Dùng lib
```
    - Export tất cả trong 
        /projects/<lib>/src/public-api.ts
    - Config dùng lib khi build ra dist
        tsconfig.json
            "byn-common": ["dist/byn-common"]    
        angular.json
            byn-common
    - Trong project tạo lib sử dụng bt 
        import { BynCommonModule, BynSharedUtilsModule } from 'byn-common';
```
Public lên npm
```
    cd dist/format-paragraph
    npm login
    npm publish --access public
```

## Cách triển khai
Khi phát triển lấy module từ link root
```
    import { BynAdminCommonModule } from 'projects/byn-admin-common/src/public-api'; 
```

Khi chạy thực tế 
- build ra dish và dùng từ tsconfig.json
- build publish lên npm và add vào project
```
    import { BynCommonModule, BynSharedUtilsModule } from 'byn-common';    
```

### Link lib demo
    https://www.npmjs.com/package/byn-common



    Gitlab registry
    https://docs.gitlab.com/ee/user/packages/npm_registry/