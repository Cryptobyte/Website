import {
  SiAmazonwebservices,
  SiApple,
  SiCloudflare,
  SiCloudflareworkers,
  SiCss3,
  SiDatadog,
  SiExpress,
  SiGamedeveloper,
  SiGithubactions,
  SiGnometerminal,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMinecraft,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiOpenai,
  SiOracle,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiReactos,
  SiSocketdotio,
  SiSwift,
  SiTypescript,
  SiWireguard,
  SiWordpress

} from '@icons-pack/react-simple-icons';

export default function mapIcon(icon: string) {
  switch (icon.toLowerCase()) {
    case "aws":                  return SiAmazonwebservices;
    case "ci/cd":                return SiGithubactions;
    case "cloudflare":            return SiCloudflare;
    case "css":                  return SiCss3;
    case "datadog":              return SiDatadog;
    case "expressjs":            return SiExpress;
    case "game server":          return SiGamedeveloper;
    case "github actions":       return SiGithubactions;
    case "html":                 return SiHtml5;
    case "java":                 return SiOracle;
    case "javascript":           return SiJavascript;
    case "linux":                return SiLinux;
    case "minecraft":            return SiMinecraft;
    case "mobile":               return SiApple;
    case "mongodb":              return SiMongodb;
    case "mysql":                return SiMysql;
    case "nestjs":               return SiNestjs;
    case "nodejs":               return SiNodedotjs;
    case "openai":               return SiOpenai;
    case "php":                  return SiPhp;
    case "postgresql":           return SiPostgresql;
    case "react native":         return SiReactos;          // ?
    case "react":                return SiReact;
    case "sever administration": return SiGnometerminal;    // ?
    case "swift":                return SiSwift;
    case "typescript":           return SiTypescript;
    case "web workers":          return SiCloudflareworkers;
    case "websockets":           return SiSocketdotio;
    case "wireguard":            return SiWireguard;
    case "wordpress":            return SiWordpress;

    case "backend":
    case "devops":
    default:                     return null;
  }
}